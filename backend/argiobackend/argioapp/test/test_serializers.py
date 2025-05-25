import pytest
from rest_framework.request import Request
from argiobackend.argioapp.serializers import ContentSerializer
from argiobackend.argioapp.models import Content

@pytest.mark.django_db
def test_serializer_valid_data(valid_content_payload, api_request_factory):
    req = Request(api_request_factory.get("/"))
    ser = ContentSerializer(data=valid_content_payload, context={"request": req})
    assert ser.is_valid(), ser.errors
    obj = ser.save()
    assert isinstance(obj, Content)

@pytest.mark.django_db
def test_serializer_invalid_data_missing_title(invalid_content_payload, api_request_factory):
    req = Request(api_request_factory.get("/"))
    ser = ContentSerializer(data=invalid_content_payload, context={"request": req})
    assert not ser.is_valid()
    assert "title" in ser.errors
