from django.db import models


class ModelBase(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Task(ModelBase):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    folder = models.ForeignKey("Folder", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class Folder(ModelBase):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name
