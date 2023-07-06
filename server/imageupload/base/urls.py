from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('image/', views.image_upload, name='profile_image_upload'),
    path('imageshow/', views.image_retrieve, name='profile_image'),
]

urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)

