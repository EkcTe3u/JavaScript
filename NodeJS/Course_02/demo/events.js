import eventEmitter from 'events';

const emetter = new eventEmitter()

emetter.on('anything', data => {
    console.log('ON: anything', data)
})

emetter.emit('anything', {a: 1})
emetter.emit('anything', {b: 2})
setTimeout(()=>{
    emetter.emit('anything', {c: 3})
}, 5000)

class Dispatcher extends eventEmitter {
    subscribe(eventName, cb){
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }
    dispath(eventName, data){
        console.log('[Dispatching...]');
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data =>{
    console.log('ON: aa ', data);
})

dis.dispath ('aa', {aa: 22})