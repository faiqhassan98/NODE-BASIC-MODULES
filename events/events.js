const events = require('events');
const eventEmitter = new events.EventEmitter();

function eventHandler(){
    console.log("Fire Events");
}

eventEmitter.on('scream',eventHandler);

eventEmitter.emit('scream');

