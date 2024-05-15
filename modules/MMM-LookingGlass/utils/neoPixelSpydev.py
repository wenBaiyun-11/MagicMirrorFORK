import spidev as spd
import ws2812 as ws
import sys

controller = spd.SpiDev()
controller.open(0,0)

def main():
    r = sys.argv[0]
    g = sys.argv[1]
    b = sys.argv[2]
    ledCount = sys.argv[3]

    colorMap = [r, g, b]
    fillSpace = [colorMap]*ledCount

    ws.write(controller, fillSpace)

if __name__ == '__main__':
    main()