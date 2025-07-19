from django.db import models
from django.contrib.auth.models import User
from django.db import transaction
from urllib.parse import urlparse, parse_qs

class Content(models.Model):

    class ContentType(models.IntegerChoices):
        VIDEO = 0, 'Video'
        PHOTO = 1, 'Photo'
        DESIGN_3D = 2, '3D Design'
        GRAPHIC_DESIGN = 3, 'Graphic Design'

    title = models.CharField(max_length=50)
    description = models.TextField()
    content_type = models.IntegerField(choices=ContentType.choices)
    url = models.URLField(help_text="Main content URL: YouTube, image, 3D model, etc.")
    thumbnail_url = models.URLField(blank=True, null=True, help_text="Thumbnail for catalogue view")
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    alt = models.CharField(max_length=50)
    grid_order = models.PositiveIntegerField(help_text="Define order within the content type selected.",)

    def save(self, *args, **kwargs):
        if self.content_type == self.ContentType.VIDEO:
            self.url = self._format_video_url(self.url)

        with transaction.atomic():
            if self.grid_order is not None:
                conflict_qs = Content.objects.filter(
                    content_type=self.content_type,
                    grid_order__gte=self.grid_order
                ).exclude(pk=self.pk).order_by('-grid_order')

            for obj in conflict_qs:
                obj.grid_order += 1
                obj.save()

        super().save(*args, **kwargs)


    def _format_video_url(self, original_url):
        parsed_url = urlparse(original_url)
        if 'youtube.com' in parsed_url.netloc:
            query_params = parse_qs(parsed_url.query)
            video_id = query_params.get('v')
            if video_id:
                return f'https://www.youtube.com/embed/{video_id[0]}'
        elif 'youtu.be' in parsed_url.netloc:
            video_id = parsed_url.path.lstrip('/')
            return f'https://www.youtube.com/embed/{video_id}'
        return original_url


    def __str__(self):
        return self.title

class AdminContent(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    modified_at = models.DateTimeField(auto_now=True)
