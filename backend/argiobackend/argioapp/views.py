from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')

@login_required
def admin_list(request):
    return render(request, 'admin/list.html')

@login_required
def admin_create(request):
    return render(request, 'admin/create.html')

@login_required
def admin_update(request):
    return render(request, 'admin/update.html')

@login_required
def admin_delete(request):
    return render(request, 'admin/delete.html')

@login_required
def content_list(request):
    return render(request, 'content/list.html')

@login_required
def content_create(request):
    return render(request, 'content/create.html')

@login_required
def content_update(request):
    return render(request, 'content/update.html')

@login_required
def content_delete(request):
    return render(request, 'content/delete.html')