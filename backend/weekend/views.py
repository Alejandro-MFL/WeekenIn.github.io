from datetime import timedelta,date
from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework import status, generics, permissions
from .models import Plan, Day
from .serializer import PlanSerializer, DaysSerializer




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

############################# Plans ############################# 
class MyPlansList(generics.ListAPIView):
    # Selecciona la serializacion(En rerializer.py) y quien tiene acceso
    serializer_class = PlanSerializer
    permission_classes = [permissions.IsAuthenticated]
    # Define la query, solo planes dek usuario y el limite de envio
    def get_queryset(self):
        qs = Plan.objects.filter(user=self.request.user).order_by("-created_at")
        limit = int(self.request.query_params.get("limit", 10))
        return qs[:limit]



############################# Days #############################
class MyDaysWelcome(generics.ListAPIView):
    # Selecciona la serializacion(En serializer.py) y quien tiene acceso
    serializer_class = DaysSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):    
        # Tomamos el dia de hoy, el primer dia de esta semana y el domingo de 5 semanas siguientes  
        today = timezone.localdate()
        firstDay = today - timedelta(days=today.weekday())
        lastDay = firstDay + timedelta(days= 7 * 4 -1)
        # Definimos la query con los datos que necesitamos enviar a welcome
        days = (Day.objects
                  .filter(user=self.request.user, date__range=[firstDay, lastDay])
                  .order_by("date")
        )            
        return days[:]

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def updateOrCreateDay(request):
    # Funciona con DRF, reques.data es donde se almacenan los datos en forma JSON
    date = request.data.get("date")
    desayuno = request.data.get("desayuno")
    mediodia = request.data.get("mediodia")
    comida = request.data.get("comida")
    tarde = request.data.get("tarde")
    cena = request.data.get("cena") 
    noche = request.data.get("noche") 
    
    

    day = Day.objects.update_or_create( date=date,defaults={desayuno:desayuno, mediodia:mediodia, comida:comida, tarde:tarde, cena:cena, noche:noche} )
        
    
    return Response({"msg": "Dia creado"}, status=status.HTTP_201_CREATED)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def deleteDay(request):
    # Funciona con DRF, reques.data es donde se almacenan los datos en forma JSON
    date = request.data.get("date")
    
    day = Day.objects.filter(user=request.user,date=date).delete        
    
    return Response({"msg": "Dia eliminado"})


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def updateOrCreatePlan(request):
    # Funciona con DRF, reques.data es donde se almacenan los datos en forma JSON
    nombre = request.data.get("nombre")
    precio = request.data.get("precio")
    zona = request.data.get("zona")
    provincia = request.data.get("provincia")
    user = request.user
    

    Plan = Plan.objects.update_or_create( user=request.user,date=date,defaults={user:id, nombre:nombre, precio:precio, zona:zona, provincia:provincia} )
        
    
    return Response({"msg": "Plan creado"}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def deletePlan(request):
    # Funciona con DRF, reques.data es donde se almacenan los datos en forma JSON
    
    idPlan = request.data.get("id")
    
    planDead = Plan.objects.filter(user=request.user, id=idPlan).delete()        
    
    return Response({"msg": "Dia eliminado"})