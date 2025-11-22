from django.db import models

class Message(models.Model):
    user_id = models.CharField(max_length=100)
    text = models.TextField()
    sender = models.CharField(max_length=10)  # 'user' | 'bot'
    created_at = models.DateTimeField(auto_now_add=True)