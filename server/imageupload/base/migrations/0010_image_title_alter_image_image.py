# Generated by Django 4.2.2 on 2023-07-04 10:24

import base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_alter_image_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='title',
            field=models.CharField(default='image', max_length=200),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(blank=True, default='image', null=True, upload_to=base.models.image_upload_path),
        ),
    ]