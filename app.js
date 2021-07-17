var selection = [];

function addSelection(element) {
    var parent = element.parentElement;
    var picture = parent.querySelector('img').getAttribute('src');
    var image = {
        imgChoice : picture
    }
    selection.push(image);
    updateSelectionPage();
}

function updateSelectionPage(){
    Cookies.set("selected", selection);
}