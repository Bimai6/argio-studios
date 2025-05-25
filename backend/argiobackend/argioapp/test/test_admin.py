import pytest
from django.contrib import admin
from django.contrib.auth.models import Group, User
from django.test import RequestFactory
from argiobackend.argioapp.admin import ContentAdmin
from argiobackend.argioapp.models import Content, AdminContent

@pytest.mark.django_db
def test_has_delete_permission_superadmin(user_factory, rf):
    user = user_factory(username="sa", password="p")
    super_group = Group.objects.create(name="SuperAdmin")
    user.groups.add(super_group)
    req = rf.get("/admin/argioapp/content/")
    req.user = user
    adm = ContentAdmin(Content, admin.site)
    assert adm.has_delete_permission(request=req) is True

@pytest.mark.django_db
def test_has_delete_permission_normal(user_factory, rf):
    user = user_factory(username="u", password="p")
    req = rf.get("/admin/argioapp/content/")
    req.user = user
    adm = ContentAdmin(Content, admin.site)
    assert adm.has_delete_permission(request=req) is False
