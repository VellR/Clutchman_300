const http = require('http')
const port = 139

const requestHandler = (request, response) =>{
  console.log(request.url)
  response.end('Connection established!')
}

const server = http.createServer(requestHandler)

server.listen(port,(err)=>{
  if(err){
    return console.log('Whoops, error detected', err)
  }

  console.log('server is listening on port ' + port)
})
