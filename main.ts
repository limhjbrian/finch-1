// draw circle
function circle (length: number, angle: number, speed: number, mode: number) {
    if (mode == 1) {
        for (let index = 0; index < 360 / angle; index++) {
            finch.setMove(MoveDir.Forward, length, speed)
            finch.setTurn(RLDir.Right, angle, speed)
        }
    } else {
        finch.startMotors(speed, speed - angle)
    }
}
// if shake: all tails Red
input.onGesture(Gesture.Shake, function () {
    finch.setTail(TailPort.All, 100, 0, 0)
})
// draw square
function square (length2: number) {
    for (let index = 0; index < 3; index++) {
        finch.setMove(MoveDir.Forward, length2, 50)
        finch.setTurn(RLDir.Right, 90, 50)
    }
    finch.setMove(MoveDir.Forward, length2, 50)
}
