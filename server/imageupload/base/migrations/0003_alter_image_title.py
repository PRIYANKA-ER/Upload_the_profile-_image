# Generated by Django 4.2.2 on 2023-07-04 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_image_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.CharField(default='Profile', max_length=100),
        ),
    ]