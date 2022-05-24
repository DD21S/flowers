# Generated by Django 4.0.4 on 2022-05-24 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flower',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('scientific_name', models.CharField(max_length=120)),
                ('slug', models.SlugField()),
                ('description', models.TextField(max_length=400)),
                ('photo', models.ImageField(upload_to='photos/')),
            ],
        ),
    ]