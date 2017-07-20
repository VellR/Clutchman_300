exports.mFilter = function(message){

console.log("message: " + message.body)
let incomingMessage = message.body.toLowerCase()

reply =
reply =
  {
    "chatId" : message.chatId,
    "type" : "text",
    "to" : message.from,
    "body" : "What can I help you with?",
    "keyboards" : [
      {
        "to" : message.from,
        "type" : "suggested",
        "responses" : [
          {
            "type" : "text",
            "body" : "Help me plan an event."
          },
          {
            "type" : "text",
            "body" : "What events are coming up?"
          },
        ]
      }
    ]
  }

if(incomingMessage.includes('hi')
  || incomingMessage.includes('hey')
  || incomingMessage.includes('hello')){
  reply.body = "Hi I'm clutchman, what can I help you with?"

  console.log("reply: " + reply.body)

  return reply

}else{
  
  console.log("reply: " + reply.body)

  return reply

}

  return null
}
