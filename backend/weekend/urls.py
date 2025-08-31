from django.urls import path
from . import views  
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import SummaryView, MyPlansList, MonthDaysView

app_name = "weekend"
urlpatterns = [
    path("api/auth/login", TokenObtainPairView.as_view()),  # Revisar
    path("api/auth/refresh", TokenRefreshView.as_view()),   # Revisar
    path("api/auth/register", views.register),
    path("api/me", views.me),
    path("api/summary", SummaryView.as_view()),
    path("api/plans/", MyPlansList.as_view()),
    path("api/calendar/month/", MonthDaysView.as_view()),
]