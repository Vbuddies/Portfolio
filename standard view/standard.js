// This is where the standard site functions will go


function hideAllRoutes() {
    //remove active class from nav-link in header
    var link = $("a.pt-link.active")
    link.removeClass("active")

    //remove page-active page from the sections
    var page = $("section.page-active")
    page.removeClass("page-active")
}

function changeRoute() {
    hideAllRoutes();
    var page;
    var link;
    switch(location.hash) {
        case "#about":
            link = $("a[href='#about']")
            
            page = $("section#about")
            break;
        case "#resume":
            link = $("a[href='#resume']")
            
            page = $("section#resume")
            break;
        case "#portfolio":
            link = $("a[href='#portfolio']")
            
            page = $("section#portfolio")
            break;
        case "#blog":
            link = $("a[href='#blog']")
            
            page = $("section#blog")
            break;
        case "#contact":
            link = $("a[href='#contact']")
            
            page = $("section#contact")
            break;
        default:
            link = $("a[href='#home']")
            
            page = $("section#home")
            break;
    }
    // add active class to nav-link in header
    link.addClass("active")
    //add page-active to section
    page.addClass("page-active")
}


window.addEventListener('hashchange', changeRoute());


//Check if window already has hash
changeRoute();