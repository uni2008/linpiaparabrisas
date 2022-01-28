radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        eskuineko_intermitentea()
    }
    if (receivedNumber == 2) {
        ezkerreko_intermitentea()
    }
    if (receivedNumber == 3) {
        linpiaparabrisas()
    }
})
function ezkerreko_intermitentea () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
}
function linpiaparabrisas () {
    pins.servoWritePin(AnalogPin.P0, randint(0, 180))
}
function eskuineko_intermitentea () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
}
radio.setGroup(6)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
})
