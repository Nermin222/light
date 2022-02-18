let Magnit = 0
Magnit += input.magneticForce(Dimension.X)
basic.showIcon(IconNames.Scissors)
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.X) - Magnit) < 100) {
        basic.showIcon(IconNames.Happy)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
    }
})
