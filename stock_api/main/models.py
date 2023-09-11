from django.db import models

# Create your models here.

class MainContact(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=200)
    age=models.CharField(max_length=200)
    city=models.CharField(max_length=200)
    country=models.CharField(max_length=200)

    def __str__(self):
        return self.name or ' '
