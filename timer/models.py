from django.db import models
from django.conf import settings


class Cycle(models.Model):
    do_date = models.DateField(auto_now_add=True, null=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    rating = models.JSONField()
