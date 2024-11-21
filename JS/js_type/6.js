function greet(name) {
    return `hello,${name}!`;
}

console.log(greet('西西里'));

greet.language = 'chinese';
greet.greetInSpanish = function (name) {
    return `hola,${name}!`;
}

function invokeGreeting(greetigFunction, name){
    return greetigFunction(name);
}

console.log(invokeGreeting(greet,'东东里'));