import spidev as spd
import ws2812 as ws
import sys

controller = spd.SpiDev()
controller.open(0,0)


r = int(sys.argv[1])
g = int(sys.argv[2])
b = int(sys.argv[3])
ledCount = int(sys.argv[4])

colorMap = [r, g, b]
fillSpace = [colorMap]*ledCount
ws.write2812(controller, fillSpace)