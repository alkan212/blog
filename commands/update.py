import os
from time import sleep
from base64 import b64encode, decode 
import json
import platform
import sys

startPath = os.path.join(os.getcwd(), "src/pages/")
files = []
relative_files = []
filenames = []
filesB64 = []
updated_file = []


# r=root, d=directories, f = files
for r, d, f in os.walk(startPath):
    for file in f:
        r = r.replace("\\", "/")
        if file.endswith(".jsx"):
            filenames.append(file)
            relative_files.append(os.path.join(r, file).replace(os.getcwd(), "")[1::])
            files.append(os.path.join(r, file))



for file in files:
    with open(file, "rb") as f:
        filesB64.append(b64encode(f.read()).decode())


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

with open("files_data.txt", "r") as f:
    last_filesB64 = f.read().split("/***s***/")

    for i in range(len(last_filesB64)):
        last = last_filesB64[i]
        current = filesB64[i]

        if(last == current):
            print(filenames[i], bcolors.OKGREEN+"same"+bcolors.ENDC)
        else:
            updated_file.append(relative_files[i])
            print(filenames[i], bcolors.FAIL+"Updated"+bcolors.ENDC)



if len(updated_file) <= 0:
    print("\n")
    print(f'{bcolors.OKCYAN}Everything is up to date{bcolors.ENDC}')
    sys.exit()


print("\n")
for file in updated_file:
    os.system(f'git add {file}')
    print(f'git add {bcolors.OKCYAN}{file}{bcolors.ENDC}')
print("\n")

os.system(f'git commit -m "automatic"')
os.system(f'git pull -f origin main')
os.system(f'git push -f origin main')




os.system(f'python3 {os.getcwd()}/commands/start.py'.replace("\\", "/"))



print("\n")
for file in updated_file:
    f = file.split("/")[-1]
    print(f'{bcolors.OKGREEN}{f}{bcolors.ENDC} Updated')
print("\n")
