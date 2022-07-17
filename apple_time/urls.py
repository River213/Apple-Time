from django.contrib import admin
from django.urls import path, include
from timer.views import *

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = (
    [
        path('admin/', admin.site.urls),
        path('accounts/', include("accounts.urls")),
        path('accounts/', include("django.contrib.auth.urls")),
        path('', timer, name="home"),
        path('history/', cycle_view, name="cycle_view"),
    ]
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
)