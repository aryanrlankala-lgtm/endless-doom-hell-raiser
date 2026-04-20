controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PLAYRR.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f 2 2 2 f f f . . . . . 
        . . . 2 2 2 2 e e e f f . . . . 
        . . . f 2 2 2 e e e e f . . . . 
        . . . f 1 2 2 1 e e e f . . . . 
        . . . f 1 f 2 1 e e 1 f . . . . 
        . . . f 1 1 2 1 1 1 1 f . . . . 
        . . . f 1 1 2 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        d d d d d b . . . . . . . . . . 
        d d d d d 5 b . . . . . . . . . 
        . . d d f f f . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        `)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 4 4 4 4 4 4 4 . . . . 
        . . . 2 4 4 5 5 5 5 5 . . . . . 
        . . . 2 2 4 4 4 4 4 4 4 4 4 . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, PLAYRR, -100, 0)
})
function LEVELSCOMHELLRAISERHTTPS (LEVEL: number) {
    if (LEVEL == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . c c c c c c c c c c c c c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c c 1 1 1 1 1 1 1 1 1 1 1 c . 
            . c c c c c c c c c c c c c . 
            . . . . c c c c c c c 5 . . . 
            . . . . 2 6 6 . 7 7 . 4 5 5 . 
            . . 2 2 2 . 6 6 7 7 7 4 4 4 5 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c c c c c c c c c c . . 
            . . c c f f f f f f f f f c . . 
            . . c c f f f f f f f f f c . . 
            . . c c f f f f f f f f f c . . 
            . . c c f f f f f f f f f c . . 
            . . c c f f f f f f f f f c . . 
            . . c c f f f f f f f f f c . . 
            . . . c c c c c c c c c c c . . 
            . . . b b b c c c c c b . . . . 
            . . b b . . b . b b . b b b b . 
            . . . . . b b . . b b b b b . . 
            `)
        game.showLongText("This cube is still growing, so that means less enemies are targeting it, stay sharp lil man.", DialogLayout.Bottom)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PLAYRR.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f 2 2 2 f . . . . 
        . . . . f f e e e 2 2 2 2 . . . 
        . . . . f e e e e 2 2 2 f . . . 
        . . . . f e e e 1 2 2 1 f . . . 
        . . . . f 1 e e 1 2 f 1 f . . . 
        . . . . f 1 1 1 1 2 1 1 f . . . 
        . . . . f 1 1 1 1 2 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b d d d d d 
        . . . . . . . . . b 5 d d d d d 
        . . . . . . . . . f f f d d . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . . . . 1 f f 1 . . . . 
        `)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . 4 4 4 4 4 4 4 2 2 . . . 
        . . . . . 5 5 5 5 5 4 4 2 . . . 
        . . 4 4 4 4 4 4 4 4 4 2 2 . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, PLAYRR, 100, 0)
})
let projectile: Sprite = null
let PLAYRR: Sprite = null
game.showLongText("CHAPTER ONE: NEW YORK CUBE.", DialogLayout.Center)
game.showLongText("YOU TOOK EVERYTHING FROM ME. NOW I HAVE NOTHING TO LOSE. WHEN I HAVE NOTHING TO LOSE. I HAVE NOTHING TO FEAR. AND NOTHING TO CONSIDER. I WILL RAISE HELL WITH EVERY STEP I TAKE", DialogLayout.Center)
PLAYRR = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f 2 2 2 f . . . . 
    . . . . f f e e e 2 2 2 2 . . . 
    . . . . f e e e e 2 2 2 f . . . 
    . . . . f e e e 1 2 2 1 f . . . 
    . . . . f 1 e e 1 2 f 1 f . . . 
    . . . . f 1 1 1 1 2 1 1 f . . . 
    . . . . f 1 1 1 1 2 1 1 f . . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b d d d d d 
    . . . . . . . . . b 5 d d d d d 
    . . . . . . . . . f f f d d . . 
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . . . 1 f f 1 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(PLAYRR)
scene.cameraFollowSprite(PLAYRR)
LEVELSCOMHELLRAISERHTTPS(1)
game.onUpdateInterval(2000, function () {
	
})
game.onUpdateInterval(500, function () {
	
})
