from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.CharField(max_length=20)  # Changed from DecimalField
    image = models.URLField(max_length=300, blank=True)  # Added image URL field

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)