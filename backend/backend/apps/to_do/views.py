from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from to_do.models import Folder, Task
from to_do.serializers import FolderSerializer, TaskSerializer


class BaseViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class TaskViewSet(BaseViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        return super().get_queryset().filter(folder__user=self.request.user)


class FolderViewSet(BaseViewSet):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer

    def get_queryset(self):
        return super().get_queryset().filter(user=self.request.user)
