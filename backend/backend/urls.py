from django.contrib import admin
from django.urls import path, include
from doc.views import redoc_view

urlpatterns = [
    path("", redoc_view),
    path("docs/", include("doc.urls")),
    path("admin/", admin.site.urls),
    path("api/", include("to_do.urls")),
]
