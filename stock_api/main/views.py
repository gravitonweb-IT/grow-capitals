from django.shortcuts import render
from .models import MainContact
from .serializers import ContactSerilizers
from rest_framework import viewsets
from rest_framework import response
# Create your views here.


class ContactViewSet(viewsets.ModelViewSet):
    queryset=MainContact.objects.all()
    serializer_class=ContactSerilizers