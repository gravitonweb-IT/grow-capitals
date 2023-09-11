from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.urls import path , include
from .views import ContactViewSet

router=DefaultRouter()
router.register('api',ContactViewSet)

urlpatterns = [
    path('main_contact/',include(router.urls))
]