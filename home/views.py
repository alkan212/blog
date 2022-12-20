from django.shortcuts import render
from django.http.response import JsonResponse


def subscribe(request):
    email = request.POST.get("email", "")
    print("oui sa marche", email)
    return JsonResponse({
        "data":f"oui : {email}",
    })