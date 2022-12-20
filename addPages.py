import os
from time import sleep

startPath = os.path.join(os.getcwd(), "src/pages/template")
files = []

# r=root, d=directories, f = files
for r, d, f in os.walk(startPath):
    for file in f:
        if file.endswith(".jsx"):
            files.append("src"+os.path.join(r, file).split("/src")[1])

for f in files:
    os.system(f"git add {f}")

sleep(3)
os.system("git commit -m 'auto commit'")
sleep(1)
os.system("git push origin main")
