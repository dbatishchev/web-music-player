from django.shortcuts import render
from django.shortcuts import render_to_response, redirect

def index(request):
    if not request.user.is_authenticated():
        return redirect('login')
    context = {'user': request.user}
    return render(request, 'index.html', context)

def login(request):
    context = {}
    return render(request, 'login.html', context)