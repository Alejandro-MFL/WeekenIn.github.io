from calendar import monthrange
from datetime import timedelta,date
from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, permissions
from .models import Weekend, Plan, Day
from .serializer import PlanSerializer




# api_view indica que solo acepta metodo POST, es la funcion encargada de registrar un nuevo usuario
@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    # Funciona con DRF, reques.data es donde se almacenan los datos en forma JSON
    username = request.data.get("username")
    password = request.data.get("password")
    # Se comprueba que todo sea correcto, ahora lo crea siempre
    #if not username or not password:
    #if User.objects.filter(username=username).exists():
    # Crea el usuario estandar con el modelo User de Django
    user = User.objects.create_user(username=username, password=password)
    # Devuelve una respuesta JSON con msg de mensaje y un codigo de verificacion
    return Response({"msg": "Usuario creado, bienvenido"}, status=status.HTTP_201_CREATED)

# api_view indica que solo acepta metodo GET y permission a usuarios autentificados por token JWT
@api_view(["GET"])
@permission_classes([IsAuthenticated])
# funcion que chequea que el usuario este autentificado
def me(request):
    user = request.user
    return Response({"id": user.id, "username": user.username}) 

class SummaryView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        today = timezone.localdate()
        # tu modelo tiene friday; buscamos el siguiente >= hoy-4 (misma semana) u otro próximo
        next_we = (Weekend.objects
                   .filter(user=request.user, friday__gte=today - timedelta(days=4))
                   .order_by("friday")
                   .first())
        if not next_we:
            return Response({"next_weekend": None, "days_to_weekend": None})

        days_to = (next_we.friday - timedelta(days=4)) - today  # lunes de esa semana - hoy
        return Response({
            "next_weekend": {
                "friday": next_we.friday,
                "start_date": next_we.start_date,  # propiedad
                "end_date": next_we.end_date,      # propiedad
            },
            "days_to_weekend": max(days_to.days, 0)
        })
    

class MyPlansList(generics.ListAPIView):
    # Selecciona la serializacion(En rerializer.py) y quien tiene acceso
    serializer_class = PlanSerializer
    permission_classes = [permissions.IsAuthenticated]
    # Define la query, solo planes dek usuario y el limite de envio
    def get_queryset(self):
        qs = Plan.objects.filter(user=self.request.user).order_by("-created_at")
        limit = int(self.request.query_params.get("limit", 10))
        return qs[:limit]

class MyDaysWelcome(generics.ListAPIView):
    # Selecciona la serializacion(En serializer.py) y quien tiene acceso
    serializer_class = PlanSerializer
    permission_classes = [permissions.IsAuthenticated]

    # Define la query, solo planes dek usuario y el limite de envio
    def get_queryset(self):
        qs = Day.objects.filter(user=self.request.user)
        limit = int(self.request.query_params.get("limit", 10))
        return qs[:limit]


class MyDaysWelcome(generics.ListAPIView):
    # Selecciona la serializacion(En serializer.py) y quien tiene acceso
    serializer_class = PlanSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self, request):    
        # Tomamos el dia de hoy, el primer dia de esta semana y el domingo de 5 semanas siguientes  
        today = timezone.localdate()
        firstDay = today - timedelta(days=today.weekday())
        lastDay = firstDay + timedelta(days= 7 * 5 -1)
        # Definimos la query con los datos que necesitamos enviar a welcome
        days = (Day.objects
                  .filter(weekend__user=request.user, date__range=[firstDay, lastDay])
                  .order_by("date")
        )            
        return days