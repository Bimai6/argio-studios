from argiobackend.argioapp.models import Content
from django.utils import timezone
import pytest

@pytest.mark.django_db
def test_content_create():
    content_instance = Content.objects.create(
        title="Inspirational Video", 
        description="Inspirational Video done 3 years ago" \
        " for an international brand with high reputation in the multimedia sector.",
        content_type= Content.ContentType.VIDEO, 
        url="https://res.cloudinary.com/dr9vuz2td/image/upload/v1746388461/untitled_nekgt3.png",
        thumbnail_url="https://res.cloudinary.com/dr9vuz2td/image/upload/v1746388461/untitled_nekgt3.png"
    )

    assert content_instance.pk is not None
    assert content_instance.title == "Inspirational Video"
    assert content_instance.description == "Inspirational Video done 3 years ago" \
        " for an international brand with high reputation in the multimedia sector."
    assert content_instance.content_type == Content.ContentType.VIDEO
    assert content_instance.url == "https://res.cloudinary.com/dr9vuz2td/image/upload/v1746388461/untitled_nekgt3.png"
    assert content_instance.thumbnail_url == "https://res.cloudinary.com/dr9vuz2td/image/upload/v1746388461/untitled_nekgt3.png"
    assert content_instance.is_active == True
    assert isinstance(content_instance.created_at, timezone.datetime)
    assert str(content_instance) == "Inspirational Video"
