from django.db import models

def image_upload_path(instance, filename):
    return 'images/' + filename

class Image(models.Model):
    title = models.CharField(max_length=200, default="image")
    image = models.ImageField(upload_to=image_upload_path, blank=True,null=True,default="image")
