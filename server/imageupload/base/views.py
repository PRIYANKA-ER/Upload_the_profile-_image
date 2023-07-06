from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from .serializers import ImageSerializer
# from rest_framework import status,viewsets
from django.http.response import HttpResponse
from PIL import Image as PILImage
from io import BytesIO




@api_view(['POST'])
def image_upload(request):
    try:
        title = request.data['title']
        image = request.data['image']

        Image.objects.filter(title=title).delete()

        Image.objects.create(title=title, image=image)

        return Response({"message": "Image stored"}, status=200)
    except KeyError:
        return Response({"message": "Invalid request"}, status=400)


@api_view(['GET'])
def image_retrieve(request):
    images = Image.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)

