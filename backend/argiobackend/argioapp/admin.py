from django.contrib import admin
from .models import Content
from django.contrib.auth.models import Group
from .signals import set_current_user

@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at', 'is_active')
    search_fields = ('title', 'description')  
    list_filter = ('is_active', )

    def has_delete_permission(self, request, obj=None):
        if request.user.groups.filter(name='SuperAdmin').exists():
            return True
        return False  

    def save_model(self, request, obj, form, change):
        set_current_user(request.user)
        super().save_model(request, obj, form, change)