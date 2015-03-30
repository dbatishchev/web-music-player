from django.shortcuts import render
from django.shortcuts import render_to_response, redirect

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