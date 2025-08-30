from django.contrib import admin
from .models import Weekend, Day
# Register your models here.

@admin.register(Weekend)
class WeekendAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "friday", "start_date", "end_date", "is_past")
    list_filter = ("user", "friday")
    search_fields = ("user__username", "title" if hasattr(Weekend, "title") else "friday")

@admin.register(Day)
class DayAdmin(admin.ModelAdmin):
    list_display = ("id", "weekend", "date", "desayuno", "comida", "cena")
    list_filter = ("weekend", "date")
    search_fields = ("weekend__user__username",)