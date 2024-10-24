// --- Directions
// Create an 'eventing' library out of an Events class.
// The Events class should include methods 'on', 'trigger', and 'off'.

class Events {

    constructor(){
        this.events = {};
    }

    // Register a new event
    on(eventName, callback){
        
        // Could be multiple events for this eventName, hold all in an array
        if( this.events[eventName] ){
            this.events[eventName].push(callback);
        }
        else{
            this.events[eventName] = [callback];
        }

    }

    // Exceute callbacks associated with a given eventName
    trigger(eventName){

        if ( this.events[eventName] ){

            for ( let callback of this.events[eventName] ){
                callback()
            }

        }

    }
                              i
    // Remove all event handlers associated wth a given eventName
    off(eventName){
        delete this.events[eventName];
    }

}


const handler = Events();

function sayHi(){
    console.log("Hi! Thanks for clicking me!");
}

handler.on("click", sayHi );

