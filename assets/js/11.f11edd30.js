(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{285:function(e,o,t){"use strict";t.r(o);var a=t(14),i=Object(a.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"making-patch-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-patch-files"}},[e._v("#")]),e._v(" Making patch files")]),e._v(" "),o("p",[e._v("In order to make your own patch files, you will need the following:")]),e._v(" "),o("ol",[o("li",[e._v("The minecraft 1.8.8 JAR")]),e._v(" "),o("li",[e._v("1.8.json")]),e._v(" "),o("li",[e._v("mcp918.zip(link "),o("a",{attrs:{href:"http://www.modcoderpack.com/files/mcp918.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("FFMPEG")])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("sub",[e._v("note: this tutorial only works for linux or mac")])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("First, move the 1.8.8 jar, the 1.8.json file, and mcp918.zip into the mcp918 folder.\nThen do "),o("code",[e._v("java -jar buildtools/BuildTools.jar init")]),e._v(" in a terminal(make sure you are in the root directory of the repo!)\nAfter it's done, do "),o("code",[e._v("java -jar buildtools/BuildTools.jar workspace")]),e._v(". It should ask you what directory you want it in.\nAfter putting this info in, it should create the directory you specified and place a Gradle project inside.\nThis is the decompiled source of Minecraft 1.8.8, plus the patches.\nJust modify the files and do "),o("code",[e._v("./gradlew teavm")]),e._v(" inside the workspace to compile.\nThen do "),o("code",[e._v("bash CompileEPK.sh")]),e._v(" to get an assets.epk file.\nIf you want to quickly test, do "),o("code",[e._v("python -m http.server")]),e._v(" in the workspace and go to localhost:8000 in your browser.\nIf you want to make a pull request, do "),o("code",[e._v("java -jar buildtools/BuildTools.jar pullrequest")]),e._v(" to generate a pullrequest folder.\nThen, take this modified version of the repo and upload it to Github, make a pullrequest, and I will take a look.\nIf you are making your own fork of EaglerReborn and have it open source, you can do "),o("code",[e._v("java -jar buildtools/BuildTools.jar merge")]),e._v("\nto finish generating the patch files.")])])}),[],!1,null,null,null);o.default=i.exports}}]);