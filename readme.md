# Rest
A discord bot that i made as a little joke/side thing. Could be used as a base if you wish to, probably wont but you can

## things it can do
very specific commands relating to a certain private bot that exists + log keeping

# Configuration
```json 
{
    "token" : "TOKEN GOES HERE",
    "prefix": "a.",
    "commandErrors": false,
    "reply": false,
    "commandID": ["218919888583000064", "325782200975097866"]
}
```
**Token**: Your bot token, can be accessed at [here](https://discord.com/developers/applications)

**prefix**: bot prefix

**commandErrors**: set to *true* if you want the bot to display permission errors, by default is *false*

**reply**: reply to a very specific string if set to *true*, can be changed in *./utils/response.js*. by default is set to *false*

**commandID**: user IDs allowed to use a specific command, used for *say*

------

*Be aware this is released as mostly a little thing i wanted to do, may or may not get fixed*