from django.db import models


class CustomUserManager(models.Manager):
    def create_user(self, username, email):
        return self.model._default_manager.create(username=username)


class CustomUser(models.Model):
    username = models.CharField(max_length=128, unique=True,)
    last_login = models.DateTimeField(blank=True, null=True)
    avatar = models.CharField(max_length=255)

    objects = CustomUserManager()

    def is_authenticated(self):
        return True


class UserPlaylist(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey('CustomUser')
    added = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class UserPlaylistItem(models.Model):
    album = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    track = models.CharField(max_length=255)
    cover = models.CharField(max_length=255)
    index = models.IntegerField()


class UserLibraryItem(models.Model):
    album = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    cover = models.CharField(max_length=255)
    user = models.ForeignKey('CustomUser')
    added = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def as_json(self):
        return dict(
            id=self.id,
            artist=self.artist,
            cover=self.cover,
            album=self.album)


class UserDownloadItem(models.Model):
    album = models.CharField(max_length=255)
    artist =  models.CharField(max_length=255)
    user = models.ForeignKey('CustomUser')
    is_resolved = models.BooleanField(default=False)
    filename = models.CharField(max_length=255)
    added = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class UserHistoryItem(models.Model):
    album = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    track = models.CharField(max_length=255)
    cover = models.CharField(max_length=255)
    user = models.ForeignKey('CustomUser')
    added = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)