from django.urls import path
from . import views  
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "weekend"
urlpatterns = [
    path("api/auth/login", TokenObtainPairView.as_view()), 
    path("api/auth/refresh", TokenRefreshView.as_view()),        
]