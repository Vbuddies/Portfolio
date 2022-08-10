import Projects from "./projects.js";

class TC {
    constructor() {
        this.Home = "   _____ __             __                  ________                       ____        __    _                       \n"
                    + "  / ___// /____  ____  / /_  ___  ____     / ____/ /_  ____ _________     / __ \\____  / /_  (_)___  _________  ____  \n"
                    + "  \\__ \\/ __/ _ \\/ __ \\/ __ \\/ _ \\/ __ \\   / /   / __ \\/ __ \`/ ___/ _ \\   / /_/ / __ \\/ __ \\/ / __ \\/ ___/ __ \\/ __ \\ \n"
                    + " ___/ / /_/  __/ /_/ / / / /  __/ / / /  / /___/ / / / /_/ (__  )  __/  / _, _/ /_/ / /_/ / / / / (__  ) /_/ / / / / \n"
                    + "/____/\\__/\\___/ .___/_/ /_/\\___/_/ /_/   \\____/_/ /_/\\__,_/____/\\___/  /_/ |_|\\____/_.___/_/_/ /_/____/\\____/_/ /_/  \n"
                    + "             /_/                                                                                                    \n\n"
                    + "Type 'start' to get started";
        
        this.Commands = {
            education: `
                ## View my educational background ##
                
                🎓 [[;green;]Bachelor of Science in Computer Science
                [[;gray;] - 📅 2019-2023
                - 🏬 Florida Southern College
                - 📍 Lakeland, Florida
                    `,

            work: `
                ## Know where I work ##
                
                
                      `,
                
            awards: `
                      `,
                
            home: `
                ## To infinity and beyond! ##
                `,

            contact: `
                ## Know where to contact me
                Hey! Just e-mail me at 📨 srobinson6@mocs.flsouthern.com. Have a good day! 
                `,

            projects(use_descriptions = false) {
                if(use_descriptions) return `## My Personal Projects ##`;
                var screen = "";

                const proj = new Projects();

                proj.get().forEach((data) => {
                    screen += `
                            🐣 [[;green;]${data.name}[[;gray;] ([[;blue;]${data.html_url}[[;gray;])
                            - ${data.description}
                            `;     
                });

                return screen;
            }
        };
    }

    getHomeScreen() {
        return this.Home;
    }

    getInfo(keyword) {
        if(typeof this.Commands[keyword] !== "undefined" && typeof this.Commands[keyword] === "string") {
            return this.Commands[keyword].replace(/##(.*)##/g, "").trim();
        } else if (typeof this.Commands[keyword] !== "undefined" && typeof(this.Commands[keyword] === "function")) {
            return this.Commands[keyword]();
        }
        return null;
    }

    getHelp() {
        var help = "";

        Object.keys(this.Commands).forEach(cmd => {
            var preview = "";
            var tokens = typeof this.Commands[cmd] === "function" 
                        ? this.Commands[cmd](true).match(/##(.*)##/g)
                        : this.Commands[cmd].match(/##(.*)##/g);

            if (tokens != null) {
                preview = tokens.join("").replace(/#/g, "").trim();
            }

            help += `\t[[;yellow;]${cmd.padEnd(15)}[[;gray;]${preview}\n`;
        });
        return help;
    }
}

export default TC;