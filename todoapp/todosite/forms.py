from django import forms

class Todositeforms(forms.Form):
    text = forms.CharField(max_length=45,
         widget=forms.TextInput(
             attrs={'class': 'form-control', 'placeholder': 'Enter your tasks here', 'aria-label': 'Todo', 'aria-describeby': 'add-btn'}
         ))