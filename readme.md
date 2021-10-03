# Rest
A discord bot that i made as a little joke/side thing. Could be used as a base if you'd like. (outdated uses discord v12)

## things it can do
By default includes
* **Ping**: embed that just shows if its infact alive (ms time todo)
* **Say**: says what it does, talk as the bot. requires userID to be included in *commandID*
* **Verify**: verify server members by a command, requires *verifyChannel* and *verifyRole* to work
* **RecordBan, RecordMute, Note, RecordWatchlist**: requires *Manage Messages* role applied to user to work, might hiccup if also not given *Manage Messages* to the bot as it uses it to clean up afterwards. Can be used to record moderation actions.  
* **Response Module**: turned off by default, make it go scream at people if someone says a thing.

# Configuration
```json 
{
    "token" : "TOKEN GOES HERE",
    "prefix": "r!",
    "commandErrors": false,
    "reply": false,
    "commandID": ["123456789123456789"],
    "verifyChannel": "123456789123456789",
    "verifyRole": "123456789123456789"
}
```
* **Token**: Your bot token, can be accessed at [here](https://discord.com/developers/applications)
* **prefix**: bot prefix
* **commandErrors**: set to *true* if you want the bot to display permission errors, by default is *false*
* **reply**: reply to a very specific string if set to *true*, can be changed in *./utils/response.js*. by default is set to *false*
* **commandID**: user IDs allowed to use a specific command, used for *say*
* **verifyChannel**: Channel to use *verify* on
* **verifyRole**: role to apply if *verify* is successful

its possible to rename *verify* to whatever you want if you wish, located at *./commands/commands/text/verify.js*

------

*Be aware this is released as mostly a little thing i wanted to do, issues may or may not get fixed and new content may or may not be released*
