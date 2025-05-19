from django.db import models
from django.contrib.auth.models import User 

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

    @property
    def embed_url(self):
        if self.content_type == self.ContentType.VIDEO and 'youtube.com' in self.url:
            video_id = self.url.split('v=')[-1].split('&')[0]
            return f'https://www.youtube.com/embed/{video_id}'
        return None

    def __str__(self):
        return self.title

class AdminContent(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    modified_at = models.DateTimeField(auto_now=True)
