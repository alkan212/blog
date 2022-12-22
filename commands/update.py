import os
from time import sleep
from base64 import b64encode, decode 
import json
import platform
import sys

startPath = os.path.join(os.getcwd(), "src/pages/")


# r=root, d=directories, f = files

def getFiles():
    response = []
    for r, d, f in os.walk(startPath):
        for file in f:
            r = r.replace("\\", "/")
            if file.endswith(".jsx"):
                response.append(os.path.join(r, file))

    return response


def getFilesRelPath():
    response = []
    for r, d, f in os.walk(startPath):
        for file in f:
            r = r.replace("\\", "/")
            if file.endswith(".jsx"):
                relpath = "src/"+os.path.join(r, file).replace("\\", "/").split("src/")[1]
                response.append(relpath)

    return response



def getFilesData():
    data = {}
    data["start_files"] = []
    data["current_files"] = {}

    for file in getFiles():
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

    return data

files_data = getFilesData()


def getStartData():
    with open('files_data.json', 'r') as f:
        data = json.load(f)
        return data["current_files"]


def getStartFiles():
    with open('files_data.json', 'r') as f:
        data = json.load(f)
        return data["start_files"]





def getNewFiles():
    response = []

    start_files = getStartFiles()
    current_files = getFilesRelPath()

    for file in current_files:
        if file not in start_files:
            response.append(file)

    return response




def getModifiedFiles():
    response = []
    start_data = getStartData()
    current_data = files_data["current_files"]

    for key in start_data.keys():
        try:
            if(current_data[key]["data"] != start_data[key]["data"]):
                response.append(current_data[key]["relpath"])
        except:
            continue

    return response


def getDeletedFile():
    response = []
    start_data = getStartData()
    current_data = files_data["current_files"]

    for key in start_data.keys():
        try:
            if(current_data[key]["filename"] != start_data[key]["filename"]):
                pass
        except:
            response.append(start_data[key]["relpath"])

    return response


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




newFiles = getNewFiles()
modifiedFiles = getModifiedFiles()
deletedFile = getDeletedFile()




def git():
    if len(newFiles) == 0 and len(modifiedFiles) == 0 and len(deletedFile) == 0:
        print(f"{bcolors.OKCYAN}Rien a changer{bcolors.ENDC}")
        return None

    for f in newFiles:
        print(f"{bcolors.OKCYAN}New File : {bcolors.ENDC}{f}")
        os.system(f"git add {f}")
    if len(newFiles) > 0: print("\n")

    for f in modifiedFiles:
        print(f"{bcolors.OKGREEN}Modified File : {bcolors.ENDC}{f}")
        os.system(f"git add {f}")
    if len(modifiedFiles) > 0: print("\n")

    for f in deletedFile:
        print(f"{bcolors.FAIL}Deleted File : {bcolors.ENDC}{f}")
        os.system(f"git add {f}")
    if len(deletedFile) > 0: print("\n")

    sleep(1)

    os.system('git commit -m "automatic"')

    sleep(1)

    os.system('git push -f origin main')

    os.system('python3 commands/start.py')


git()