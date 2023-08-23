let express = require('express')
const que1 = express()

que1.get('/que1', function(req,res){
    res.send(a+b)
})

let port = 8081

que1.listen(port,function (){
    console.log(port)
})
//(function (a, b) {
    ///return a + b;
//});
