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
                term.echo(tc.getHelp()).resume();
                break;
            case "home":
                window.location = "/";
                break;
            case "projects":

            if(typeof window.Vbuddies_projects == "object") {
                let data = window.Vbuddies_projects
                data.forEach((p) => {
                    term.echo(`
🐣 [[;green;]${p.name}[[;gray;] ([[;default;]${p.html_url}[[;gray;])
- ${p.description}
                    `);
                });
                term.resume();
            } else {


                $.ajax({
                    url: "https://api.github.com/users/Vbuddies/repos",
                    method: "get",
                    async: false,
                    success: data => {
                        window.Vbuddies_projects = data;
                        data.forEach((p) => {
                            term.echo(`
🐣 [[;green;]${p.name}[[;gray;] ([[;default;]${p.html_url}[[;gray;])
- ${p.description}
                            `);
                        });
                        term.resume();
                    }
                });
            }
                break;
            default:
                var results = tc.getInfo(command);

                if(results !== null) {
                    msg = results;
                } else if (command.length > 0) {
                    msg = `[[;red;]Command "${command}" not found.`;
                }
                if(command == 'start') {
                    term.echo();
                    term.typing('echo', 50, msg, function() {});
                    term.resume();
                } else {
                    term.echo(msg).resume();
                }
                break;
        }
    },
    {
        prompt: 'guest@SCR-Terminal>',
        name: "main",
        autucompleteMenu: true,
        completion: Object.keys(tc.Commands)
    }
);

term.clear();
term.echo(tc.getHomeScreen());
