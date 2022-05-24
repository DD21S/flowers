from django.contrib import admin

from flowers.models import Flower

# Register your models here.

@admin.register(Flower)
class FlowerAdmin(admin.ModelAdmin):
	fields = (('name', 'scientific_name', 'slug',), 'description', 'photo',)
	list_display = ('name', 'scientific_name', 'slug',)
	search_fields = ('name', 'scientific_name',)
