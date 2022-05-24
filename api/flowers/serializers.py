from rest_framework import serializers

from flowers.models import Flower

class FlowerSerializer(serializers.ModelSerializer):
	class Meta:
		model = Flower
		fields = '__all__'
		lookup_field = 'slug'
		extra_kwargs = {'url': {'lookup_field': 'slug'}}

