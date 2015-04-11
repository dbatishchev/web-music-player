from django.shortcuts import render
from django.shortcuts import render_to_response, redirect
import urllib2
import simplejson as json
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime


def index(request):
    if not request.user.is_authenticated():
        return redirect('login')

    social = request.user.social_auth.get(provider='vk-oauth')
    token = social.extra_data['access_token']

    context = {'user': request.user, 'token': token}
    return render(request, 'index.html', context)


def login(request):
    context = {}
    return render(request, 'login.html', context)

@csrf_exempt
def download_album(request):
    if request.is_ajax():
        if request.method == 'POST':
            data = json.loads(request.body)
            access_token = request.user.social_auth.get(provider='vk-oauth').extra_data['access_token']
            artist = data['artist']
            tracks = data['tracks']

            import os
            os.makedirs("/Users/dmitrii/web_music_player/web_music_player/web_music_player/static/temp")

            for i, track in enumerate(tracks):
                if i > 2:
                    continue

                request_str = "https://api.vk.com/method/audio.search?q="+artist+"+-+"+track+"&access_token=" + access_token;
                response_str = urllib2.urlopen(request_str)
                json_response = json.loads(response_str.read())

                track_url = json_response["response"][1]["url"]

                track_response = urllib2.urlopen(track_url)
                track_data = track_response.read()

                with open("/Users/dmitrii/web_music_player/web_music_player/web_music_player/static/temp/"+artist+"/track_"+str(i)+".mp3", "wb") as track_file:
                    track_file.write(track_data)

            import os
            import zipfile

            def zipdir(path, zip):
                for root, dirs, files in os.walk(path):
                    for file in files:
                        zip.write(os.path.join(root, file))

            zipf = zipfile.ZipFile(artist+'.zip', 'w')
            zipdir("/Users/dmitrii/web_music_player/web_music_player/web_music_player/static/temp/", zipf)
            zipf.close()
