const http = require("http")
const port = 3000

function routeRequest(path) {
    var routes = path.split('/')
    routes.shift()
    console.log(routes)
}

function handleRequest(request, response) {
    console.log(request.url)

    routeRequest(request.url)

    // TODO - return 400 if we can't find the URL
    // TODO - return 500 if the server is broken somehow
    // TODO - go to a routing function
    // TODO - craft an HTTP response with the results of the routing function

    response.writeHead(200, {
        //'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain' 
    })

    response.end('Hello!\n' + request.url)
}

function run(error) {
    if (error) {
        return console.log('Error, not working...', error)
    }
    
    console.log(`Server is listening on ${port}`)
}

const server = http.createServer(handleRequest)

server.listen(port, run)