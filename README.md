# Catavento

This is the main repository for the Simple-VideoWall software. The following folders contain the projects used:

/webView --> Python webView for open the video page
 
Dependencies
------------

The project use the following external dependencies:

* The NodeJS server

* Python 3.11

Services and TCP Ports
----------------------
Video Hub: 80

The video Hub - index.js
---------------------
* The  video Hub is a node.js code that runs a backend server to feed the videos. This is possible by the express dependecy

* Change the _VID files to setup all videos 

The webView - webView.py
---------------------
* The webView is a python3 code that runs a browser in fullscreen. This is possible by the PyWebView dependecy (https://pywebview.flowrl.com/)

* Change the webView.py file to setup de video address and the possition on screen

* To exit the webView.py with the Keyboard:
  -> In Ubunutu: just send ALT+F4
  -> In WIndows: Hold ALT+TAB, choose the window of the browser and click in the 'X' of the upper right conner with the mouse


