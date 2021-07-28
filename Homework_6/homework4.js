Object.defineProperty(Array.prototype, 'myMap',{
    configurable : false,
    writable : false,
    enumerable : false,
    value : function (fn){
        const arr= [];
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i], i, this));
        }
        return arr;
    }
})
console.log([1,2,3].map(function (value,index,array){
    return value * 2;
}));
console.log([1,2,3].myMap(function (value,index,array){
    return value * 2;
}));