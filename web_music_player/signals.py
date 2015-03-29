from social_auth.signals import pre_update
from django.dispatch import receiver

@receiver(pre_update)
def update_person_details(sender, **kwargs):
    person = kwargs.get('user')
    details = kwargs.get('details')
    load_person_avatar(sender, person, kwargs.get('response'))

def load_person_avatar(sender, person, info):
    image_url = None

    if sender.name == 'vkontakte-oauth2':
        vk_response = info.get('response')
        if vk_response:
            image_url = vk_response.get('user_photo') # If photo is absent user_photo is absent too

    if image_url:
        try:
            person.avatar = image_url
            person.save()
        except Exception:
            pass # Here we completely do not care about errors