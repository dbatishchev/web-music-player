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