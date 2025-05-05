from .models import Content
from rest_framework import serializers

class ContentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Content
        fields = ['id', 'title', 'description', 'content_type', 'url', 'created_at', 'is_active']