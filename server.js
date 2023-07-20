//console.log("Hello world! this is backend development.")

//var http = require('http')

/*  http.createServer((request,response)=>{
    console.log("Listening on port 4000... ")
    response.write("Welcome to backend development")
    response.end()
}).listen(4000)  */



// var server = http.createServer((req,res)=>{
//     console.log('request made...')

//     console.log(req.method, req.url)

//     res.setHeader('Content-Type', 'text/plain')

//     res.write('iurfncrnvuerivnburbuhreuhreuhvijreoij')
//     res.write('Welcome')
//     res.end()
// })

// server.listen(4000, 'localhost', ()=>{
//     console.log('listening on port 4000...')
// })






var http = require('http')
var fs =require('fs')

var server=http.createServer((req,res)=>{
    console.log('request made...')
    console.log(req.method,req.url)

    //index.html  //about.html  //404.html
    //switch(req.url)
    //case "/" -> index.html
    //case "/about" -> index.html
    //case default: -> 404.html

    var path ='./views/'

    switch(req.url){
        case "/":
            path= path+"index.html"
            res.statusCode =200 //successful response
            break;
        case "/about":
            path= path+"about.html"
            res.statusCode =200 //successful response
            break;
        default:
            path= path+"404.html"
            res.statusCode =404 //not found
            break;
    }

    // npm= node package manager
    // 3rd package.


    res.setHeader('Content-Type','text/html')

    fs.readFile(path, (error, data)=>{
        if(error){
            console.log(error.message)
            res.end(error.message)
        }
        res.end(data)
    }) 


})
server.listen(4000,'localhost',()=>{
    console.log('listening on port 4000...')
})