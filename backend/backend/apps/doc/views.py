from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="To-do items API",
        description="API for managing to do items",
        default_version="1.0",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

redoc_view = schema_view.with_ui("redoc", cache_timeout=0)

swagger_view = schema_view.with_ui("swagger", cache_timeout=0)

json_view = schema_view.without_ui(cache_timeout=0)
