devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    Stop()
})
devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    Stop()
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
	
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
    L_Wheel = 1
    R_Wheel = 1
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P14, L_Wheel)
    pins.digitalWritePin(DigitalPin.P13, R_Wheel)
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
    L_Wheel = 0
    R_Wheel = 0
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P14, L_Wheel)
    pins.digitalWritePin(DigitalPin.P13, R_Wheel)
}
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
	
})
function Stop () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let R_Wheel = 0
let L_Wheel = 0
basic.showIcon(IconNames.Pitchfork)
bluetooth.startLEDService()
L_Wheel = 0
R_Wheel = 0
