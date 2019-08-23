const Discord = require ('discord.js')
const config = {
    ownerid: "455770403428892705",
    token: "NTkxNjY5MTcyNDY4MTg3MTQ0.XQ0KKQ.gP_orUQ8lr3iNQkIDzTaGGsscOs",
    prefix: "we!"
}
const pack = require ('./package.json')
const bot = new Discord.Client()

const fs = require ('fs')

bot.on('ready', function() {
    bot.user.setActivity('Chercher la réponse de la vie...')
    //bot.user.setAvatar("./Logo_v2.jpg")
    console.log('Enigm est lancé !')
})

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let prefix = config.prefix
    let messageArray = message.content.split(' ')
    let command = messageArray[0];
    let args = messageArray.slice(1);

var toWrite
    //enigm
    let difficulty = JSON.parse(fs.readFileSync("./difficulty.json", "utf8"))
    if (!difficulty) {
    difficulty = {
        difficulty: "Non précisée"
        }
        fs.writeFile("./difficulty.json", JSON.stringify(difficulty), err => {
            console.log(err)
        })
    }
    let stindice = JSON.parse(fs.readFileSync("./stindice.json", "utf8"))
    if (!stindice) {
    stindice = {
        stindice: "Non précisé"
        }
        fs.writeFile("./stindice.json", JSON.stringify(stindice), err => {
            console.log(err)
        })
    }
    let ndindice = JSON.parse(fs.readFileSync("./ndindice.json", "utf8"))
    if (!ndindice) {
    ndindice = {
        ndindice: "Non précisé"
        }
        fs.writeFile("./ndindice.json", JSON.stringify(ndindice), err => {
            console.log(err)
        })
    }
    let info = JSON.parse(fs.readFileSync("./infocomp.json", "utf8"))
    if (!info) {
    info = {
        info: "Non précisé"
        }
        fs.writeFile("./infocomp.json", JSON.stringify(info), err => {
            console.log(err)
        })
    }
    let reponse = JSON.parse(fs.readFileSync("./reponse.json", "utf8"))
    if (!reponse) {
    reponse = {
        reponse: "Non précisée"
        }
        fs.writeFile("./reponse.json", JSON.stringify(reponse), err => {
            console.log(err)
        })
    }
    // leaderboard
    let premier = JSON.parse(fs.readFileSync("./premier.json", "utf8"))
    if (!premier) {
        premier = {
            premier: "Non précisé"
        }
        fs.writeFile("./premier.json", JSON.stringify(premier), err => {
            console.log(err)
        })
    }
    let deuxieme = JSON.parse(fs.readFileSync("./deuxieme.json", "utf8"))
    if (!deuxieme) {
        deuxieme = {
            deuxieme: "Non précisé"
        }
        fs.writeFile("./deuxieme.json", JSON.stringify(deuxieme), err => {
            console.log(err)
        })
    }
    let troisième = JSON.parse(fs.readFileSync("./troisième.json", "utf8"))
    if (!troisième) {
        troisième = {
            troisième: "Non précisé"
        }
        fs.writeFile("./troisième.json", JSON.stringify(troisième), err => {
            console.log(err)
        })
    }
    // profil
    let wins = require ('./wins.json')
    if (!wins[message.author.id]) {
        wins[message.author.id] = {
            wins: 0
        }
        fs.writeFile("./wins.json", JSON.stringify(wins), err => {
            console.log(err)
        })
    }
    let money = require ('./money.json')
    if (!money[message.author.id]) {
        money[message.author.id] = {
            money: 0
        }
        fs.writeFile("./money.json", JSON.stringify(money), err => {
            console.log(err)
        })
    }
    

if (command === `${prefix}help`) {
    let helpEmbed = new Discord.RichEmbed()
    .setAuthor(
            "Page d'aide :", bot.user.avatarURL
        )
    .setDescription(
            "Note : La plupart des commandes ci-dessous sont réservées aux modérateurs, administarteurs ou les membres ayant le rôle `enigm`."
        )
    .addField(
            "Economie (admin):",
        "`addmoney`,`removemoney`"
        )
            "Enigm (admin):",
        "`end`,`set1indice`,`set2indice`,`sedifficulty`,`setinfocomplémentaire`,`setréponse`,`start`"
        )
    .addField(
            "General :",
        "`botinfo`,`ping`"
        )
    .setColor("#ed991c")
    let help2Embed = new Discord.RichEmbed()
    .setAuthor(
        "Page d'aide :", bot.user.avatarURL
    )
    .setDescription(
        "Note : Les commandes ci-dessous sont les commandes de la version full (premium)."
    )
    .addField(
        "Economie (membre):",
    "`leaderboard`"
    )
    .addField(
        "Enigm (admin):",
    "`end`"
    )
    .addField(
        "Enigm (membres):",
    "`répondre`,`voter`"
    )
    .setColor("#ed991c")

        message.channel.send(helpEmbed)
        message.channel.send(help2Embed)
    }

if (command === `${prefix}ping`) {
message.channel.send("Latence du bot : " + message.createdTimestamp + "ms.")
}

if (command === `${prefix}setdifficulty`) {
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")
    if (!args[0]) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas précisé la difficulté !**")
    toWrite = args.join(" ")
    difficulty = {
        difficulty: toWrite
        }
        fs.writeFile("./difficulty.json", JSON.stringify(difficulty), err => {
            console.log(err)
        })

        let setdifficultyEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`La difficulté de la prochaine énigme est enregistrée.`)
        .setColor("#ed991c")
        message.channel.send(setdifficultyEmbed)
}

if (command === `${prefix}set1indice`) {
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")
    if (!args[0]) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas précisé le premier indice !**")
    toWrite = args.join(" ")
    stindice = {
        stindice: toWrite
        }
        fs.writeFile("./stindice.json", JSON.stringify(stindice), err => {
            console.log(err)
        })

        let setstindiceEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`Le premier indice de la prochaine énigme est enregistrée.`)
        .setColor("#ed991c")
        message.channel.send(setstindiceEmbed)
}

if (command === `${prefix}set2indice`) {
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")
    if (!args[0]) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas précisé le premier indice !**")
    toWrite = args.join(" ")
    ndindice = {
        ndindice: toWrite
        }
        fs.writeFile("./ndindice.json", JSON.stringify(ndindice), err => {
            console.log(err)
        })

        let setndindiceEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`Le second indice de la prochaine énigme est enregistrée.`)
        .setColor("#ed991c")
        message.channel.send(setndindiceEmbed)
}

if (command === `${prefix}setinfocomplémentaire`) {
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")
    if (!args[0]) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas précisé le premier indice !**")
    toWrite = args.join(" ")
    info = {
        info: toWrite
        }
        fs.writeFile("./infocomp.json", JSON.stringify(info), err => {
            console.log(err)
        })

        let setinfoEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`Les informations complèmentaires de la prochaine énigme sont enregistrées.`)
        .setColor("#ed991c")
        message.channel.send(setinfoEmbed)
}

if (command === `${prefix}setréponse`) {
    message.delete()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")
    if (!args[0]) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas précisé de réponse !**")
    toWrite = args.join(" ").toLowerCase()
    reponse = {
        reponse: toWrite
        }
        fs.writeFile("./reponse.json", JSON.stringify(reponse), err => {
            console.log(err)
        })

        let setreponseEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`La réponse de la prochaine énigme est enregistrée.`)
        .setColor("#ed991c")
        message.channel.send(setreponseEmbed)
}


if (command === `${prefix}profil`) {
    let profileUser = message.author
    
    if (!profileUser) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Veuillez préciser un utilisateur valide !**")

    if (!money[profileUser.id]) {
        money[profileUser.id] = {
            money: 0
        }
        fs.writeFile("./money.json", JSON.stringify(money), err => {
            console.log(err)
        })
    }
    
    if (!wins[profileUser.id]) {
        wins[profileUser.id] = {
            wins: 0
        }
        fs.writeFile("./wins.json", JSON.stringify(wins), err => {
            console.log(err)
        })
    }
    

        let profilEmbed = new Discord.RichEmbed()
        .setAuthor(profileUser.username, profileUser.avatarURL)
        .addField("Argent :", money[profileUser.id].money)
        .addField("Enigmes gagnés :", wins[profileUser.id].wins)
        .setThumbnail(profileUser.avatarURL)
        .setColor("#ed991c")
        message.channel.send(profilEmbed)
}

if (command === `${prefix}addmoney`) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")

    let profileUser = message.guild.member(message.mentions.users.first())
    
    if (!profileUser) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Veuillez préciser un utilisateur valide !**")

var argent = args[1]

        money[profileUser.id] = {
            money: money[profileUser.id].money + parseInt(argent)
        }
        fs.writeFile("./money.json", JSON.stringify(money), err => {
            console.log(err)
        })
    

        let addmoneyEmbed = new Discord.RichEmbed()
        .setAuthor(profileUser.username, profileUser.avatarURL)
        .addField("Argent ajouté :", argent)
        .addField("Par :", message.author.username)
        .setColor("#ed991c")
        message.channel.send(addmoneyEmbed)
}

if (command === `${prefix}removemoney`) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")

    let profileUser = message.guild.member(message.mentions.users.first())
    
    if (!profileUser) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Veuillez préciser un utilisateur valide !**")

var argent = args[1]

        money[profileUser.id] = {
            money: money[profileUser.id].money - parseInt(argent)
        }
        fs.writeFile("./money.json", JSON.stringify(money), err => {
            console.log(err)
        })
    

        let removemoneyEmbed = new Discord.RichEmbed()
        .setAuthor(profileUser.username, profileUser.avatarURL)
        .addField("Argent supprimé :", argent)
        .addField("Par :", message.author.username)
        .setColor("#ed991c")
        message.channel.send(removemoneyEmbed)
}

if (command === `${prefix}start`) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("OUPS ! Une erreur s'est produite : \n**Vous n'avez pas les permissions !**")

    message.delete()
        if (!difficulty) {
        difficulty = {
            difficulty: "Non précisée"
            }
            fs.writeFile("./difficulty.json", JSON.stringify(difficulty), err => {
                console.log(err)
            })
        }
        if (!stindice) {
        stindice = {
            stindice: "Non précisé"
            }
            fs.writeFile("./stindice.json", JSON.stringify(stindice), err => {
                console.log(err)
            })
        }
        if (!ndindice) {
        ndindice = {
            ndindice: "Non précisé"
            }
            fs.writeFile("./ndindice.json", JSON.stringify(ndindice), err => {
                console.log(err)
            })
        }
        if (!info) {
        info = {
            info: "Non précisé"
            }
            fs.writeFile("./infocomp.json", JSON.stringify(info), err => {
                console.log(err)
            })
        } 
        if (!reponse) {
        reponse = {
            reponse: "Non précisée"
            }
            fs.writeFile("./reponse.json", JSON.stringify(reponse), err => {
                console.log(err)
            })
        } 
        if (stindice.stindice === "Non précisé") return message.channel.send("OUPS ! Une erreur s'est produite : \n**Cette énigme n'a pas de d'indice !**")
        if (reponse.reponse === "Non précisée") return message.channel.send("OUPS ! Une erreur s'est produite : \n**Cette énigme n'a pas de réponse !**")
        let startEmbed = new Discord.RichEmbed()
        .setAuthor("Une nouvelle énigme est apparue !", bot.user.avatarURL)
        .setDescription(`Le niveau est de difficulté **${difficulty.difficulty}**.`)
        .addField("1er indice :", stindice.stindice)
        .addField("2nd indice :", ndindice.ndindice)
        .addField("Informations complèmentaires :", info.info)
        .setColor("#ed991c")
        .setFooter("D'autres infos ou indices peuvent êtres donnés plus tard.")
        message.channel.send(startEmbed)
    }

bot.login(config.token)
