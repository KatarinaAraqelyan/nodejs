const events = require('events');
const fs= require('fs');
const EventEmitter = events.EventEmitter;

const  Event = new EventEmitter();

Event.on('homework',(file) =>{
    fs.readFile(file,(err,data) =>{
        if(err){
            console.log(err);
        }
        else console.log(data.toString())
    })
})
Event.emit('homework','homework.txt')