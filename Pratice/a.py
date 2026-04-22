import math
from turtle import *

def hearta(k):
    return 15 * math.sin(k) ** 3

def heartb(k):
    return 13 * math.cos(k) - 5 * math.cos(2 * k) \
           - 2 * math.cos(3 * k) - math.cos(4 * k)

speed(0)
bgcolor("black")
color("pink")
pensize(2)

penup()
goto(0, 0)
pendown()

for i in range(0, 628):
    k = i / 100
    x = hearta(k) * 20
    y = heartb(k) * 20
    goto(x, y)

done()
