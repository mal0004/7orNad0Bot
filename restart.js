exports.run = (client, message, args) => {
    const config = require("./config")
        if (message.author.id == "306119836503900161") {
     message.channel.send(`:gear: -> redémarrage...`)
          console.log("déconnection")
          client.destroy();
           console.log("redémarrage")
            client.login(config.token)
  }else{
    message.channel.send(`:x: ${message.author} tu n'est pas mon developpeur.`)
  }
}