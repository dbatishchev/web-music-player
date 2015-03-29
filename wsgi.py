import os
import sys

path = '/Users/dmitrii/web_music_player/web_music_player'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'web_music_player.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()