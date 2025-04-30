"""
URL configuration for argiobackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from argioapp import views
from django.contrib.auth import views as auth_views 

urlpatterns = [
    path('accounts/login/', auth_views.LoginView.as_view(), name='login'),

    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'),
    
    path('dashboard/', views.dashboard, name='dashboard'),

    path('dashboard/admins/', views.admin_list, name='admin_list'),
    path('dashboard/admins/create/', views.admin_create, name='admin_create'),
    path('dashboard/admins/update/<int:pk>/', views.admin_update, name='admin_update'),
    path('dashboard/admins/delete/<int:pk>/', views.admin_delete, name='admin_delete'),

    path('dashboard/contents/', views.content_list, name='content_list'),
    path('dashboard/contents/create/', views.content_create, name='content_create'),
    path('dashboard/contents/update/<int:pk>/', views.content_update, name='content_update'),
    path('dashboard/contents/delete/<int:pk>/', views.content_delete, name='content_delete'),
]
