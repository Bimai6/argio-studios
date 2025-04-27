from django.db import models

class Permission(models.Model):
    name
    description

class Role(models.Model):
    name

class RolePermission(models.Model):
    role
    permission

class Admin(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=30)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    active = models.BooleanField()

class Content(models.Model):
    title
    description
    content_type
    url
    created_at
    active

class AdminContent(models.Model):
    admin
    content
    modified_at