from rest_framework import viewsets, filters
from .serializers import ContentSerializer
from .models import Content
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all().order_by('id')
    serializer_class = ContentSerializer
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields = ['id', 'created_at']
    filterset_fields = ['content_type']
    ordering = ['id']
    pagination_class = StandardResultsSetPagination