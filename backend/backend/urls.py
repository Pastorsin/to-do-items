from django.contrib import admin
from django.urls import path, include
from doc.views import redoc_view
from rest_framework.authtoken import views

urlpatterns = [
    path("", redoc_view),
    path("docs/", include("doc.urls")),
    path("admin/", admin.site.urls),
    path("api/", include("to_do.urls")),
    path("api/token/", views.obtain_auth_token),
]
