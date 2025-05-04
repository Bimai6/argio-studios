from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Content, AdminContent
from threading import local

_user = local()

def set_current_user(user):
    _user.value = user

def get_current_user():
    return getattr(_user, 'value', None)

@receiver(post_save, sender=Content)
def log_admin_content_change(sender, instance, **kwargs):
    admin = get_current_user()
    if admin:
        AdminContent.objects.create(content=instance, admin=admin)