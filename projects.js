class Projects {
    get() {
        if(typeof window.Vbuddies_projects == "object") {
            return window.Vbuddies_projects;
        }

        const Http = new XMLHttpRequest();
        const url = "https://api.github.com/users/Vbuddies/repos";
        Http.open("GET", url);
        Http.send();

        return Http.onreadystatechange=(resp)=> {
            window.Vbuddies_projects = resp;
            return resp;
        }

    }
}

export default Projects;