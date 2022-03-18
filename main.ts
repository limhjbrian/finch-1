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
function square (width: number, height: number, speed: number) {
    for (let index = 0; index < 4; index++) {
        finch.setMove(MoveDir.Forward, width, speed)
        finch.setTurn(RLDir.Right, 90, speed)
        finch.setMove(MoveDir.Forward, height, speed)
        finch.setTurn(RLDir.Right, 90, speed)
    }
}
