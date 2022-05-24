from django.urls import include, path

from rest_framework.routers import DefaultRouter

from flowers.views import FlowerViewSet

router = DefaultRouter()
router.register(r'flowers', FlowerViewSet)

urlpatterns = [
	path('', include(router.urls)),
    path('api_auth/', include('rest_framework.urls', namespace='auth')),
]