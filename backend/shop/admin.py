from django.contrib import admin
from .models import Product, CartItem

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'price')

admin.site.register(Product, ProductAdmin)
admin.site.register(CartItem)
