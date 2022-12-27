import os
from time import sleep
import json
import random



def get_random_author(authors):
  # Get a random index from the list
  index = random.randint(0, len(authors) - 1)

  # Return the author at the random index
  return authors[index]


authors = [
  {
    "name":"Roel Aufderehar",
    "img":"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    "name":"Brenna Goyette",
    "img":"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    "name":"Daniela Metz",
    "img":"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
]




startPath = os.path.join(os.getcwd(), "src/pages/template")
files = []

# r=root, d=directories, f = files
for r, d, f in os.walk(startPath):
    for file in f:
        r = r.replace("\\", "/")
        if file.endswith(".jsx"):
            files.append("src"+os.path.join(r, file).split("/src")[1])


data = []
for fPath in files:
    with open(fPath, "r") as f:
        lines = f.readlines()

        d = {}

        for line in lines:
            d["href"] = fPath.replace("\\", "/").split("/")[-1].split(".")[0]
            d["author"] = get_random_author(authors)

            if "constsujet=" in line.replace(" ","").lower():
                d["category"] = line.split('"')[1].strip().lower()

            if "consttitre=" in line.replace(" ","").lower():
                d["title"] = line.split('"')[1].strip()

            if "constdescription=" in line.replace(" ","").lower():
                d["description"] = line.split('"')[1].strip()

        data.append(d)


response = {}
for d in data:
    try:
        response[d["category"]].append(d)
    except:
        response[d["category"]] = []
    
    print(response)


with open('src/blogList.js', 'w') as f:
    json.dump(response, f)
