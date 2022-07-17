from django.shortcuts import render
from .forms import CycleForm
from .models import Cycle


def timer(request):
    return render(request, "timer.html")


def cycle_view(request):
    form = CycleForm
    cycles = Cycle.objects.all()
    return render(request, "base.html", {"form": form, "friends": cycles})
