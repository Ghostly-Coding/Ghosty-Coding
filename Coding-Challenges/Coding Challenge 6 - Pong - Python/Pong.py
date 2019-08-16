import pygame, sys, random
pygame.init()

width = 800
height = 600
win = pygame.display.set_mode((width, height))

run = True
white = (255,255,255)
font = pygame.font.Font(pygame.font.get_default_font(), 24)

ph = 150
py = height/2-(ph/2)

bx = width/2
by = height/2
bVelX = 5
bVelY = 5

ah = 150
ay = height/2-(ah/2)

pScore = 0
aScore = 0
def reset():
    global py, bx, by, ay, bVelX, bVelY

    py = height/2-(ph/2)
    ay = height/2-(ah/2)

    bx = width/2
    by = height/2
    bVelX = random.randint(3, 7)
    bVelY = random.randint(3, 7)
while run:
    pBounds = pygame.Rect((10, py, 10, ph))
    aBounds = pygame.Rect((width-20, ay, 10, ah))
    bBounds = pygame.Rect((bx-5, by-5, 10, 10))
    pressed = pygame.key.get_pressed()
    pygame.display.update()
    win.fill((0, 0, 0))
    pS = font.render("Player: " + str(pScore), True, white)
    aS = font.render("AI: " + str(aScore), True, white)
    pygame.draw.rect(win, white, (10, py, 10, ph))
    pygame.draw.rect(win, white, (width-20, ay, 10, ah))
    pygame.draw.circle(win, white, (bx, by), 10)
    if pressed:
        if pressed[pygame.K_w]:
            py -= 3
        elif pressed[pygame.K_s]:
            py += 3
    if py + ph > height:
        py = height - ph
    elif py < 0:
        py = 0
    if bx > width:
        reset()
        pScore += 1
    elif bx < 0:
        reset()
        aScore += 1
    if by > height or by < 0:
        bVelY *= -1
    if ay - 10> by:
        ay -= 3
    elif ay + ah - 10 < by:
        ay += 3
    if bBounds.colliderect(pBounds) or bBounds.colliderect(aBounds):
        bVelX *= -1
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False
            sys.exit()
    win.blit(pS, (30, 20))
    win.blit(aS, (770 - aS.get_width(), 20))
    bx += bVelX
    by += bVelY
    pygame.time.delay(1000//60)
