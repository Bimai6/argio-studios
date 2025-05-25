import pytest
from rest_framework.test import APIClient, APIRequestFactory
from django.contrib.auth.models import User
from argiobackend.argioapp.models import Content

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def api_request_factory():
    return APIRequestFactory()

@pytest.fixture
def user_factory(db):
    def create_user(**kwargs):
        return User.objects.create_user(**kwargs)
    return create_user

@pytest.fixture
def content_factory(db):
    def create_content(**kwargs):
        defaults = {
            "title": "Default title",
            "description": "Default description",
            "content_type": 0,
            "url": "https://default.url",
            "thumbnail_url": "https://default.thumb",
            "is_active": True,
        }
        defaults.update(kwargs)
        return Content.objects.create(**defaults)
    return create_content

@pytest.fixture
def valid_content_payload():
    return {
        "title": "New",
        "description": "Desc",
        "content_type": 1,
        "url": "https://example.com/video",
        "thumbnail_url": "https://example.com/thumb",
        "alt": "Alt"
    }

@pytest.fixture
def invalid_content_payload():
    return {
        "title": "",
        "description": "Desc",
        "content_type": "invalid_type",
        "url": "not a url",
        "thumbnail_url": "not a url",
    }