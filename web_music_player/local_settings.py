# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

#import dj_database_url

#DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.sqlite3',
#        'NAME':  os.path.join(BASE_DIR, 'db.sqlite3'),
#        #'USER': 'root',
#        #'PASSWORD': 'Igrima123',
#        #'HOST': 'localhost',   # Or an IP Address that your DB is hosted on
#        #'PORT': '3306',
#    }
#}

#DATABASES['default'] = dj_database_url.config()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME':  'music',
        'USER': 'root',
        'PASSWORD': 'Igrima123',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

VK_APP_ID = '4850739'
VKONTAKTE_APP_ID = VK_APP_ID
VK_API_SECRET = 'cz15I1xUb3HGAOCqTLL7'
VKONTAKTE_APP_SECRET = VK_API_SECRET
VK_EXTRA_SCOPE = ['audio']