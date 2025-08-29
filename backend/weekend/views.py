from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

# api_view indica que solo acepta metodo POST, es la funcion encargada de registrar un nuevo usuario
@api_view(["POST"])
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