from django.db import models

# Create your models here.

class Flower(models.Model):
	name = models.CharField(max_length=120)
	scientific_name = models.CharField(max_length=120)
	slug = models.SlugField()
	description = models.TextField(max_length=400)
	photo = models.ImageField(upload_to="photos/")

	def __str__(self):
		return self.name
