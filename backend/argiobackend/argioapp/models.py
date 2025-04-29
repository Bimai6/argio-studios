from django.db import models

class Permission(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

class Role(models.Model):
    name = models.CharField(max_length=50)

class RolePermission(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    permission = models.ForeignKey(Permission, on_delete=models.CASCADE)

class Admin(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=30)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

class Content(models.Model):

    class ContentType(models.IntegerChoices):
        VIDEO = 0, 'Video'
        PHOTO = 1, 'Photo'
        DESIGN_3D = 2, '3D Design'
        GRAPHIC_DESIGN = 3, 'Graphic Design'

    title = models.CharField(max_length=50)
    description = models.TextField()
    content_type = models.IntegerField(choices=ContentType.choices)
    url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

class AdminContent(models.Model):
    admin = models.ForeignKey(Admin, on_delete=models.CASCADE)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
    modified_at = models.DateTimeField(auto_now=True)
