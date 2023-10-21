# Making patch files

In order to make your own patch files, you will need the following:

1. The minecraft 1.8.8 JAR
2. 1.8.json
3. mcp918.zip(link [here](http://www.modcoderpack.com/files/mcp918.zip))
4. FFMPEG

---
Note: This tutorial only works on Linux or MacOS. To do this on Windows, either setup up a virtual machine or use WSL (preferably WSL 2).

---

First, move the 1.8.8 jar, the 1.8.json file, and mcp918.zip into the mcp918 folder.
Then. open a terminal in the root directory of the repo.
Run `java -jar buildtools/BuildTools.jar init` in the terminal.
After it's done, do `java -jar buildtools/BuildTools.jar workspace`. It should ask you what directory you want it in.
After putting this info in, it should create the directory you specified and place a Gradle project inside.
This is the decompiled source of Minecraft 1.8.8, plus the patches.
Just modify the files and do `./gradlew teavm` inside the workspace to compile.
Then do `bash CompileEPK.sh` to get an assets.epk file.
If you want to quickly test, do `python -m http.server` in the workspace and go to localhost:8000 in your browser.
If you want to make a pull request, do `java -jar buildtools/BuildTools.jar pullrequest` to generate a pullrequest folder.
Then, take this modified version of the repo and upload it to Github, make a pullrequest, and I will take a look.
If you are making your own fork of EaglerReborn and have it open source, you can do `java -jar buildtools/BuildTools.jar merge`
to finish generating the patch files.

To make an offline download, run `bash MakeOfflineDownload.sh` after running `./gradlew teavm` and `bash CompileEPK.sh`
