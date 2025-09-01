from rest_framework import serializers
from .models import Plan, Day , Weekend

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ("id","nombre","zona","provincia","precio","created_at")

class DayMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ("id","date")  # minimal

class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ("id","date","desayuno", "mediodia", "comida", "tarde", "cena", "noche")  


class WeekendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weekend
        fields = ("id", "friday")