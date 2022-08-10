import TC from "./tc.js";
// Docs for the terminal
// https://terminal.jcubic.pl/api_reference.php#options


const tc = new TC();
const term = $('#terminal').terminal(
    function(command, term) {
        term.pause();
        var msg = "";

        switch (command.toLowerCase()) {
            case "help":
            case "ls":
            case "ll":
                msg = tc.getHelp();
                break;
            case "home":
            case "exit":
                window.location = "/";
                break;
            default:
                var results = tc.getInfo(command);

                if(results !== null) {
                    msg = results;
                } else if (command.length > 0) {
                    msg = `[[;red;]Command "${command}" not found.`;
                }
                break;
        }

        term.resume();

        return msg + (msg.length ? "\n" : "");

    },
    {
        prompt: '>',
        name: "main",
        autucompleteMenu: true,
        completion: Object.keys(tc.Commands)
    }
);

term.clear();
term.echo(tc.getHomeScreen());

//     start: function() {
//         this.echo("\n\tWelcome to my Portfolio Website!");
//         this.echo("\tI wanted a unique design for this site, and so I decided to go with a")
//         this.echo("\tterminal theme because I do enjoy using Linux. If you don't like this")
//         this.echo("\tversion of the site and would prefer a more typcial looking site, you ")
//         this.echo("\tcan type 'exit' at any time to return to a more conventional site.\n")
//         this.echo("\n\tIf you think you would enjoy this version of the site, you can enter")
//         this.echo("\t'help' at any time to learn all the commands or you can type 'help' after")
//         this.echo("\t a command to learn more about that specific command.")
//     },
