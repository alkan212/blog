


class test:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        response = self.get_response(request)
        print("HOST :", request.get_host())

        user_ip = request.META.get("REMOTE_ADDR")
        user_referer = request.META.get("HTTP_REFERER")



        return response