let objWithStringValue = {
    toString: function() {
        return "hello"
    }
}
console.log(String(objWithStringValue)) // hello


let objWithValueOf = {
    toString: function() {
        return this;
    },
    valueOf: function() {
        return 123;
    }
}
console.log(String(objWithValueOf)) // 123


let objWithoutPrimitive = {
    toString: function() {
        return this;
    },
    valueOf: function() {
        return this;
    }
}

try {
    String(objWithoutPrimitive)
} catch (e) {
    console.log(e)
} // TypeError: Cannot convert object to primitive value