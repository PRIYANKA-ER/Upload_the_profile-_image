# Generated by Django 4.2.2 on 2023-07-04 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='title',
            field=models.CharField(default='no image', max_length=100),
        ),
    ]
