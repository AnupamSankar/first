from django.shortcuts import render, redirect

from .models import Todosite

from .forms import Todositeforms

from django.views.decorators.http import require_POST

# Create your views here.

def index(request):
    todo_items = Todosite.objects.order_by('id')
    form = Todositeforms()
    context = {'todo_items': todo_items, 'form': form}
    return render(request, 'todosite/index.html', context)

@require_POST
def addTodoitem(request):
    form = Todositeforms(request.POST)
    if form.is_valid():
        new_todo = Todosite(text=request.POST['text'])
        new_todo.save()
    #print(request.POST['text'])
    
    return redirect('index')


def completed(request, todo_id):
    todo = Todosite.objects.get(pk=todo_id)
    todo.completed = True
    todo.save()

    return redirect('index')


def deleteCompleted(request):
    Todosite.objects.filter(completed__exact=True).delete()
    return redirect('index')


def deleteAll(request):
    Todosite.objects.all().delete()
    return redirect('index')

