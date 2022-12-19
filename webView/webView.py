import webview
import time

xyL =   [[1920,1080], 
        [1920,1080]]

posWind =   [[0,0], 
            [1921,0]]

wind = []

def move():
    global wind
    global xyL
    global posWind
    count = 0
    for i in wind:
        print('Window coordinates are ({0}, {1})'.format(i.x, i.y))
        i.resize(xyL[count][0], xyL[count][1])
        time.sleep(2)
        i.move(posWind[count][0], posWind[count][1])
        print('Window coordinates are ({0}, {1})'.format(i.x, i.y))
        i.resize(xyL[count][0], xyL[count][1])
        count = count + 1

window = webview.create_window('Hello world', 'http://localhost/?vid=1', frameless=True)
wind.append(window)
window2 = webview.create_window('Hello world', 'http://localhost/?vid=3', frameless=True)
wind.append(window2)
webview.start(move)