from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from user_auth.models import UserLibraryItem
from django.core import serializers
import json

@csrf_exempt
def add_to_favorites(request):
    if request.is_ajax():
        if request.method == 'POST':
            artist = request.POST.get('artist', '')
            album = request.POST.get('album', '')
            cover = request.POST.get('cover', '')

            try:
                library_item = UserLibraryItem.objects.get(artist=artist, album=album, user=request.user)
            except UserLibraryItem.DoesNotExist:
                library_item = None

            if library_item:
                library_item.delete()
            else:
                library_item = UserLibraryItem(artist=artist, album=album, cover=cover, user=request.user, added=datetime.now())
                library_item.save()

            return HttpResponse(json.dumps({
                'status': 'success',
                "album": album,
                "artist": artist,
                "cover": cover
                }), content_type="application/json")
        else:
            library_items = UserLibraryItem.objects.filter(user=request.user)
            result = [ob.as_json() for ob in library_items]
            return HttpResponse(json.dumps({
                'status': 'success',
                "albums": result,
                }), content_type="application/json")
