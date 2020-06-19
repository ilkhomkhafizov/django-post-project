from django.conf import settings
from django import forms

from .models import Post

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['content']
    
    def clean_content(self):
        content = self.cleaned_data.get("content")
        if len(content) > MAX_TWEET_LENGTH:
            raise forms.ValidationError("This post is too long")
        return content