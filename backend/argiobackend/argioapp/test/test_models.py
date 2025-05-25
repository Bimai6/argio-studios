from argiobackend.argioapp.models import Content
from django.utils import timezone
import pytest

@pytest.mark.django_db
def test_content_create(content_factory):
    content_instance = content_factory()
    assert content_instance.pk is not None
    assert content_instance.title == "Inspirational Video"
    assert content_instance.is_active is True
    assert isinstance(content_instance.created_at, timezone.datetime)
    assert str(content_instance) == content_instance.title

@pytest.mark.django_db
@pytest.mark.parametrize("input_url, expected_embed", [
    ("https://www.youtube.com/watch?v=abc123", "https://www.youtube.com/embed/abc123"),
    ("https://youtu.be/xyz789", "https://www.youtube.com/embed/xyz789"),
    ("https://example.com/foo", "https://example.com/foo"),
])
def test_url_clean(content_factory, input_url, expected_embed):
    c = content_factory(url=input_url, thumbnail_url=input_url)
    assert c.url == expected_embed

@pytest.mark.django_db
def test_str_method(content_factory):
    c = content_factory(title="My title")
    assert str(c) == "My title"