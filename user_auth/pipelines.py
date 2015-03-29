def get_user_avatar(backend, details, response, social_user, uid,
                    user, *args, **kwargs):
    user.avatar = response['user_photo']
    user.save()
