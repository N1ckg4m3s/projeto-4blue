from django.urls import path
from .views import PostMessageView, GetHistoryView

urlpatterns = [
    path("messages/", PostMessageView.as_view(), name="sendMessages"),
    path("messages/history/", GetHistoryView.as_view(), name="getHistory"),
]
