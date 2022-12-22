import os
from time import sleep
from base64 import b64encode, decode 
import json
import platform


startPath = os.path.join(os.getcwd(), "src/pages/")
files = []
filesB64 = []
data = {}
data["current_files"] = {}
data["start_files"] = []


# os.system("git fetch")
# os.system("git reset --hard origin/main")

sleep(1)

# r=root, d=directories, f = files
for r, d, f in os.walk(startPath):
    for file in f:
        r = r.replace("\\", "/")
        if file.endswith(".jsx"):
            files.append(os.path.join(r, file))



for file in files:
    with open(file, "rb") as f:
        filename = file.replace("\\", "/").split("/")[-1]
        relpath = "src/"+file.replace("\\", "/").split("src/")[1]
        data["start_files"].append(relpath)

        data["current_files"][filename] = {
            "filename":filename,
            "relpath":relpath,
            "abspath":file,
            "data":b64encode(f.read()).decode(),
        }



with open('files_data.json', 'w') as f:
    json.dump(data, f)

        


