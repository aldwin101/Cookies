var value = Cookies.get("selected");
var selected = JSON.parse(value);

function addSelectedItem(item){
    var ItemInSelectionPage = document.createElement('div');
    document.getElementById('selectionPage').append(ItemInSelectionPage);
    
    var selectedImg = document.createElement('img');
    selectedImg.setAttribute('src',item.imgChoice);
    selectedImg.style.width = "15vw";
    ItemInSelectionPage.append(selectedImg);
}

for(var i=0; i < selected.length; i++) {
    addSelectedItem(selected[i]);
}
