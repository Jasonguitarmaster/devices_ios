devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    Stop()
})
function Left () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.analogWritePin(AnalogPin.P14, speed * -1)
    pins.analogWritePin(AnalogPin.P13, speed)
}
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    Stop()
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    Right()
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
devices.onGamepadButton(MesDpadButtonInfo.DUp, function () {
    Stop()
})
function Back () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.analogWritePin(AnalogPin.P14, 512)
    pins.analogWritePin(AnalogPin.P13, 512)
}
devices.onGamepadButton(MesDpadButtonInfo.CUp, function () {
    Stop()
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    Back()
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    Go()
})
function Go () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
}
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    Left()
})
function Right () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.analogWritePin(AnalogPin.P14, speed)
    pins.analogWritePin(AnalogPin.P13, speed * -1)
}
function Stop () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let speed = 0
basic.showIcon(IconNames.Pitchfork)
bluetooth.startLEDService()
speed = 5
