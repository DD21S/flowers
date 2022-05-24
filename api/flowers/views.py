from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from flowers.models import Flower
from flowers.serializers import FlowerSerializer

# Create your views here.

class FlowerViewSet(viewsets.ModelViewSet):
	"""
	A view for viewing and editing flower instances.
	"""
	serializer_class = FlowerSerializer
	queryset = Flower.objects.all()
	permission_classes = [IsAuthenticatedOrReadOnly]
	lookup_field = 'slug'
 