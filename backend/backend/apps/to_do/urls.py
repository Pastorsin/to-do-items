from to_do.views import FolderViewSet, TaskViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register("folders", FolderViewSet, basename="folders")
router.register("tasks", TaskViewSet, basename="tasks")

urlpatterns = router.urls
