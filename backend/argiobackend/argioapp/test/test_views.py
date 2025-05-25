import pytest
from django.urls import reverse
from rest_framework import status
from argiobackend.argioapp.models import Content
from django.contrib.auth.models import Permission

@pytest.mark.django_db
def test_list_contents(api_client, content_factory):
    for i in range(3):
        content_factory(title=f"T{i}")
    url = reverse("content-list")  
    res = api_client.get(url)
    assert res.status_code == status.HTTP_200_OK
    body = res.json()
    assert "results" in body
    assert len(body["results"]) == 3

@pytest.mark.django_db
def test_create_content(api_client, user_factory, valid_content_payload):
    user = user_factory(username="u", password="p")
    api_client.force_authenticate(user=user)
    url = reverse("content-list")
    res = api_client.post(url, valid_content_payload, format="json")
    assert res.status_code == status.HTTP_403_FORBIDDEN

@pytest.mark.django_db
def test_create_content_allowed_for_staff(api_client, user_factory, valid_content_payload):
    user = user_factory(username="staff", password="p")
    user.is_staff = True
    user.save()
    perm = Permission.objects.get(codename='add_content')
    user.user_permissions.add(perm)
    api_client.force_authenticate(user=user)
    url = reverse("content-list")
    res = api_client.post(url, valid_content_payload, format="json")
    assert res.status_code == status.HTTP_201_CREATED

@pytest.mark.django_db
def test_delete_content_unauthorized(api_client, content_factory):
    c = content_factory()
    url = reverse("content-detail", args=[c.id])
    res = api_client.delete(url)
    assert res.status_code == status.HTTP_401_UNAUTHORIZED

@pytest.mark.django_db
def test_delete_content_forbidden_for_non_staff(api_client, content_factory, user_factory):
    c = content_factory()
    user = user_factory(username="u", password="p")
    api_client.force_authenticate(user=user)
    res = api_client.delete(reverse("content-detail", args=[c.id]))
    assert res.status_code == status.HTTP_403_FORBIDDEN
