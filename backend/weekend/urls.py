from django.urls import path
from . import views  
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import  MyPlansList, MyDaysWelcome

app_name = "weekend"
urlpatterns = [
    path("api/auth/login", TokenObtainPairView.as_view()),  
    path("api/auth/refresh", TokenRefreshView.as_view()),   
    path("api/auth/register", views.register),
    path("api/me", views.me),
    path("api/plans/", MyPlansList.as_view()),
    path("api/calendar/month/", MyDaysWelcome.as_view()),
]