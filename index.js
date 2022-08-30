function receivesAFunction (callback){
    callback();
}
function callback(){
    console.log("I was called.");
}
function returnsANamedFunction() {
    return function named(){
        console.log("named function");
    };
}

function returnsAnAnonymousFunction(){
   return () => console.log("cast off thy name");
    }