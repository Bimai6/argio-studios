from django.contrib import admin
from .models import Content
from django.contrib.auth.models import Group
from .signals import set_current_user

@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'created_at', 'is_active', 'grid_order')
    search_fields = ('title', 'description', 'grid_order')  
    list_filter = ('is_active', )

    def save_model(self, request, obj, form, change):
        set_current_user(request.user)
        super().save_model(request, obj, form, change)

class Content(admin.ModelAdmin):
    class Meta:
        model = Content
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if self.instance and self.instance.content_type:
            existing_orders = Content.objects.filter(
                content_type=self.instance.content_type
            ).exclude(pk=self.instance.pk).values_list('grid_order', flat=True)

            max_order = max(existing_orders or [0]) + 30
            available_choices = [(i, str(i)) for i in range(1, max_order) if i not in existing_orders]

            self.fields['grid_order'].widget = admin.Select(choices=available_choices)

    def clean_grid_order(self):
        order = self.cleaned_data['grid_order']
        ctype = self.cleaned_data.get('content_type')
        if Content.objects.filter(content_type=ctype, grid_order=order).exclude(pk=self.instance.pk).exists():
            raise admin.ValidationError("This number is already been used.")
        return order
    
    def available_grid_orders(self, obj):
        existing = Content.objects.filter(content_type=obj.content_type).values_list('grid_order', flat=True)
        return f"Already used for this type: {sorted(existing)}"
    available_grid_orders.short_description = "Existing orders"