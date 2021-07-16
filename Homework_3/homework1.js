const promise = new Promise(function (resolve, reject){
    let random =  Math.floor(Math.random() * 10)
    if(random > 5 ){
        resolve(random)
    }
    reject(new Error("error!"))
})
promise.then(function (data){
    console.log(data)
})
promise.catch(function (err){
    console.log(err)
})