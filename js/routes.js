const routes = {
    "/github": "https://github.com/weien0905",
    "/vartemplate": "https://vartemplate.web.app/",
    "/drcr": "https://drcr.pythonanywhere.com/",
    "/sudoku": "https://sudokuvisualiser.web.app/"
}

let url = new URL(window.location.href);
if (url.pathname !== "/") {
    if (url.pathname in routes) {
        window.location.replace(routes[url.pathname]);
    } else {
        window.location.replace("/");
    }
}