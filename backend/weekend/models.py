from datetime import timedelta
from django.conf import settings
from django.db import models
from django.utils import timezone

class zona(models.TextChoices):
    INTERIOR = "IN", "Interior"
    EXTERIOR = "EX", "Exterior"


class PrecioNivel(models.TextChoices):
    BARATO = "BA", "Barato"
    MEDIO  = "ME", "Medio"
    CARO   = "CA", "Caro"


class Plan(models.Model):
    user = models.ForeignKey(
            settings.AUTH_USER_MODEL,
            on_delete=models.CASCADE,       
            related_name="planes"
        )
    nombre = models.CharField(max_length=120, null=True, blank=True)     # "Plan"
    zona = models.CharField(
        max_length=2, choices=zona.choices, null=True, blank=True
    )
    provincia = models.CharField(max_length=100, null=True, blank=True)  # revisar tablas meteorologia
    precio = models.CharField(
        max_length=2, choices=PrecioNivel.choices, null=True, blank=True
    )    
    day = models.ForeignKey("Day", null=True, blank=True, on_delete=models.SET_NULL,
                             related_name="plans")
    created_at = models.DateTimeField(auto_now_add=True)     


    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.nombre
    


class Day(models.Model):
    user = models.ForeignKey(
            settings.AUTH_USER_MODEL,
            on_delete=models.CASCADE,       
            related_name="days"
        )
    date = models.DateField()                    

    # Es temporal
    desayuno = models.CharField(max_length=200, blank=True)
    mediodia = models.CharField(max_length=200, blank=True)
    comida   = models.CharField(max_length=200, blank=True)
    tarde    = models.CharField(max_length=200, blank=True)
    cena     = models.CharField(max_length=200, blank=True)
    noche    = models.CharField(max_length=200, blank=True)

    class Meta:        
        ordering = ["date"]

    def __str__(self):
        return f"{self.date:%a %d/%m}"