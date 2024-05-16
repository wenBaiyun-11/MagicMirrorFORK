import spidev as spd
import ws2812 as ws
import sys

controller = spd.SpiDev()
controller.open(0,0)


r = sys.argv[1]
g = sys.argv[2]
b = sys.argv[3]
ledCount = sys.argv[4]

colorMap = [r, g, b]
fillSpace = [colorMap]*ledCount
ws.write2812(controller, fillSpace)