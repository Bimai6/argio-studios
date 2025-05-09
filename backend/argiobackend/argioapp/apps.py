from django.apps import AppConfig


class ArgioappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'argiobackend.argioapp'

    def ready(self):
        import argiobackend.argioapp.signals