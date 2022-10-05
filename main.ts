input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(points)
    basic.pause(200)
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 30; index++) {
        for (let index = 0; index < 1; index++) {
            for (let index = 0; index < 4; index++) {
                basic.pause(100)
                enemy.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
            if (player.isTouching(enemy)) {
                enemy.delete()
                points = points + 1
            } else if (enemy.isTouchingEdge()) {
                enemy.delete()
            }
        }
        basic.pause(200)
        enemy = game.createSprite(randint(0, 4), 0)
    }
})
let points = 0
let enemy: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
enemy = game.createSprite(randint(0, 4), 0)
points = 0
basic.forever(function () {
	
})
