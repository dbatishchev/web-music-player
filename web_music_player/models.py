from django.db import models


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