from rest_framework import serializers
from .models import Plan, Day

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ("id","nombre","zona","provincia","precio","created_at")

class DayMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ("id","date")  # minimal