from django.urls import path, include
from . import views  
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import  MyPlansList, MyDaysWelcome

app_name = "weekend"

urlpatterns = [
    path("api/auth/login", TokenObtainPairView.as_view()),  
    path("api/auth/refresh", TokenRefreshView.as_view()),   
    path("api/auth/register", views.register),
    path("api/me", views.me),
    path("api/calendar/month/", MyDaysWelcome.as_view()),
    path("api/plans/", MyPlansList.as_view()),
    path("api/day/", MyDaysWelcome.as_view()),
    path("api/day/delete", views.deleteDay),
    path("api/day/update", views.updateOrCreateDay),
    path("api/plan/delete", views.deletePlan),
    path("api/plan/update", views.updateOrCreatePlan),
    

    
]


