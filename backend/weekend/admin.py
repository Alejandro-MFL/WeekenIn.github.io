from django.contrib import admin
from .models import  Day, Plan
# Register your models here.


@admin.register(Day)
class DayAdmin(admin.ModelAdmin):
    list_display = ("id", "date", "desayuno", "comida", "cena")
    filter = ( "date")
    

@admin.register(Plan)
class DayAdmin(admin.ModelAdmin):
   list_display = ("nombre","user", "precio","zona")
   list_filter = ("user", "precio", "zona")
   
    