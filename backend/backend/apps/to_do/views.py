from rest_framework import viewsets
from to_do.models import Folder, Task
from to_do.serializers import FolderSerializer, TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.filter(is_deleted=False)
    serializer_class = TaskSerializer


class FolderViewSet(viewsets.ModelViewSet):
    queryset = Folder.objects.filter(is_deleted=False)
    serializer_class = FolderSerializer
