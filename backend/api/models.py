from django.db import models

class Message(models.Model):
    user_id = models.CharField(max_length=100)
    mensage = models.TextField()
    self_message = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)