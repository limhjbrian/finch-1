def circle(length: number, angle: number, speed: number, mode: number):
    if mode == 1:
        for index in range(360 / angle):
            finch.set_move(MoveDir.FORWARD, length, speed)
            finch.set_turn(RLDir.RIGHT, angle, speed)
    else:
        finch.start_motors(speed, speed - angle)

def on_gesture_shake():
    finch.set_tail(TailPort.ALL, 100, 0, 0)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def square(length2: number):
    for index2 in range(3):
        finch.set_move(MoveDir.FORWARD, length2, 50)
        finch.set_turn(RLDir.RIGHT, 90, 50)
    finch.set_move(MoveDir.FORWARD, length2, 50)