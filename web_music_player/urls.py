from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'web_music_player.views.index', name='home'),
    url(r'^login$', 'web_music_player.views.login', name='login'),
    url(r'^download$', 'web_music_player.views.download_album', name='download_album'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('social_auth.urls')),
)
