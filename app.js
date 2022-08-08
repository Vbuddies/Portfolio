// Docs for the terminal
// https://terminal.jcubic.pl/api_reference.php#options
$('#terminal').terminal({
    echo: function(arg1) {
        this.echo(arg1);
    },
    help: function() {
        this.echo("help");
    },
    home: function() {
        this.echo("home");
    },
    projects: function() {
        this.echo("projects");
    },
    about: function() {
        this.echo("about");
    },
    contact: function() {
        this.echo("contact");
    }

}, { 
    prompt: '>', 
    name: "main", 
    greetings:    "   _____ __             __                  ________                       ____        __    _                       \n"
                + "  / ___// /____  ____  / /_  ___  ____     / ____/ /_  ____ _________     / __ \\____  / /_  (_)___  _________  ____  \n"
                + "  \\__ \\/ __/ _ \\/ __ \\/ __ \\/ _ \\/ __ \\   / /   / __ \\/ __ \`/ ___/ _ \\   / /_/ / __ \\/ __ \\/ / __ \\/ ___/ __ \\/ __ \\ \n"
                + " ___/ / /_/  __/ /_/ / / / /  __/ / / /  / /___/ / / / /_/ (__  )  __/  / _, _/ /_/ / /_/ / / / / (__  ) /_/ / / / / \n"
                + "/____/\\__/\\___/ .___/_/ /_/\\___/_/ /_/   \\____/_/ /_/\\__,_/____/\\___/  /_/ |_|\\____/_.___/_/_/ /_/____/\\____/_/ /_/  \n"
                + "             /_/                                                                                                    \n"
});