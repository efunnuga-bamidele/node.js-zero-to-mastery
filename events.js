const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Observer 1
// celebrity.on('race win', () => {
//     console.log("Congratulation, you are the best!")
// })

celebrity.on('race', (result) => {
    if (result === 'win'){
        console.log("Congratulation, you are the best!")
    }
})
//Observer 2
celebrity.on('race', (result) => {
    if (result === 'win'){
        console.log("Boo I could have done better than that!")
    }
})

process.on('exit', (code) => {
    console.log("Process exit event with code: ", code)
})

// celebrity.emit('race win')

celebrity.emit('race', 'win')
celebrity.emit('race', 'loose')