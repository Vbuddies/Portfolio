
class Projects {
    get() {

        // if(typeof window._Vbuddies_projects == "object") {
        //     return window._Vbuddies_projects;
        // }

        // var resp = null;
        // $.ajax({
        //     url: "https://api.github.com/users/Vbuddies/repos",
        //     method: "get",
        //     async: false,
        //     success: data => {
        //         resp = data;
        //     }
        // });

        // window._Vbuddies_projects = resp;

        // return resp;

        return new Promise((resolve, reject) => {
            if(typeof window.Vbuddies_projects == "object") {
                resolve(window.Vbuddies_projects);
            }
            let xhr = new XMLHttpRequest();
            let url = "https://api.github.com/users/Vbuddies/repos"

            xhr.open("GET", url)

            xhr.onload = () => {
                if(xhr.status >= 200 && xhr.status < 300) {
                    window.Vbuddies_projects = xhr.response
                    resolve(xhr.response)
                } else {
                    reject(xhr.statusText)
                }
            }
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });


        // if(typeof window.Vbuddies_projects == "object") {
        //     return window.Vbuddies_projects;
        // }

        // const Http = new XMLHttpRequest();
        // const url = "https://api.github.com/users/Vbuddies/repos";
        // Http.open("GET", url);
        // Http.send();

        // Http.onreadystatechange=(resp)=> {
        //     window.Vbuddies_projects = resp;
        //     return resp;
        // }

    }
}

export default Projects;