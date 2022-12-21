"""weknow URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from home.views import *

import os

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('admin/', admin.site.urls),
    path('subscribe/', subscribe),
]



excludedFile = ["_next", "500.html", "404.html"]






files = []
# r=root, d=directories, f = files
for r, d, f in os.walk(os.path.join(settings.BASE_DIR, ".next/server/pages")):
    for file in f:
        if file in excludedFile: continue
        files.append(".next/"+os.path.join(r, file).split(".next/")[1])



for f in files:
    if f.endswith(".html") == False:continue

    file_url_path = f.split("/")[-1].split(".html")[0]+"/"
    html_file_path = os.path.join(settings.BASE_DIR, f)

    urlpatterns.append(
        path("blog/"+file_url_path , TemplateView.as_view(template_name=html_file_path)),
    )



# print(templates)

# urlpatterns.append(
#     path("login/" , TemplateView.as_view(template_name=os.path.join(settings.BASE_DIR, '.next/export/login.html'))),
# )
