exports.mFilter = function(message){

console.log("message: " + message.body)
let incomingMessage = message.body.toLowerCase()

main_reply =
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

plan_reply =
{
  "chatId" : message.chatId,
  "type" : "text",
  "to" : message.from,
  "body" : ""
}


if(incomingMessage.includes('hi')
  || incomingMessage.includes('hey')
  || incomingMessage.includes('hello')){
  main_reply.body = "Hi I'm clutchman, what can I help you with?"

  console.log("reply: " + main_reply.body)

  return main_reply

}else if(incomingMessage == 'help me plan an event.'){
  plan_reply.body = "Sure, Whats the event called?"
  console.log("reply: " + plan_reply.body)

  return plan_reply
}else{

  console.log("reply: " + main_reply.body)

  return main_reply

}

  return null
}
