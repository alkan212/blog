import os
from time import sleep
from base64 import b64encode, decode 
import json
import platform


startPath = os.path.join(os.getcwd(), "src/pages/")
files = []
filesB64 = []



os.system("git fetch")
os.system("git reset --hard origin/main")

sleep(1)

# r=root, d=directories, f = files
for r, d, f in os.walk(startPath):
    for file in f:
        r = r.replace("\\", "/")
        if file.endswith(".jsx"):
            files.append(os.path.join(r, file))



for file in files:
    with open(file, "rb") as f:
        filesB64.append(b64encode(f.read()))


with open("files_data.txt", "w") as f:
    i = 0
    for file_data in filesB64:
        if i <= 0:
            f.write(file_data.decode())
        else:
            f.write("/***s***/")
            f.write(file_data.decode())

        i+= 1
        


