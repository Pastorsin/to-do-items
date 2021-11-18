from rest_framework import serializers
from to_do.models import Folder, Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


class FolderSerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True, source="task_set")
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Folder
        fields = ["id", "name", "tasks", "user"]
