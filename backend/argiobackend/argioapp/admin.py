from django.contrib import admin
from .models import Content

@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at', 'is_active')

    def has_delete_permission(self, request, obj=None):
        return request.user.groups.filter(name='SuperAdmin').exists()
