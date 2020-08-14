from django.db import models


class Template(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    project = models.ForeignKey("Project", on_delete=models.CASCADE, name="Project", null=True)

    def __str__(self):
        return f'Template {self.name} for {self.Project}'
