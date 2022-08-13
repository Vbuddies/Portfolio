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
            start: `
                ## The Introduction of it all ##

Welcome to my Portfolio Website!
I wanted a unique design for this site, and I love working with Linux and the terminal,
so I decided to make it a terminal theme. If you don't like terminal or this version of
the site you can type 'exit' at any time to return to a more conventional looking site.
If you would like to continue using the terminal theme you can type 'help' at any time
for a list of possible commands.
            `,

            exit: `
                ## For those who hate the terminal ##
            Exit not implemented yet`,

            education: `
                ## View my educational background ##
                
🎓 [[;green;]Bachelor of Science in Computer Science
    [[;gray;] - 📅 2019-2023
     - 🏬 Florida Southern College
     - 📍 Lakeland, Florida
     - [[;red;]Concentrations:[[;gray;]
            * Web And Cloud Computing
            * Artifical Intelligence And Machine Learning
            * Cybersecurity
`,

            work: `
                ## Know where I work ##
                
💼 [[;green;]John J Jerue Companies
    [[;gray;]- 💻 Junior Software Engineer
    - 📅 January 2022 - Present
    - 📍 Lakeland, Florida
        `,
                
            awards: `
                ## Some awards, recognitions & positions ##
🏆 [[;green;] President's List
    [[;gray;]- 📅 Last 5 Semesters
    - 🏬 Florida Southern College

💻 [[;green;] CS Capture the Flag Club President
    [[;gray;]- 📅 August 2021 - Present
    - 🏬 Florida Southern College

💻 [[;green;] CS Department Tutor
    [[;gray;]- 📅 September 2021 - Present
    - 🏬 Florida Southern College
        `,
                
            home: `
                ## To infinity and beyond! ##
                `,

            contact: `
                ## Know where to contact me ##

Hi, thanks for reaching out 
I can be reached at 📨 srobinson6@mocs.flsouthern.com. Have a good day!

Github:[[;blue;] https://github.com/Vbuddies [[;gray;]
LinkedIn:[[;blue;] https://www.linkedin.com/in/stephen-chase-robinson-023081186 [[;gray;]
`,

            projects(use_descriptions = false) {
                if(use_descriptions) return `## My Personal Projects ##`;

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