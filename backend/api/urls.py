from django.urls import path
from .views import PostMessageView, GetHistoryView

urlpatterns = [
    path("messages/", PostMessageView.as_view()),
    path("messages/history/", GetHistoryView.as_view()),
]
