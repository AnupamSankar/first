from django.shortcuts import render

from .models import Todosite

# Create your views here.

def index(request):
    todo_items = Todosite.objects.order_by('id')
    context = {'todo_items': todo_items}
    return render(request, 'todosite/index.html', context)