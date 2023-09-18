var pageCounter = 0;
var activePage;


function CreatePage(){
    pageCounter++
    var pageButton = document.createElement("input");

    pageButton.setAttribute("type", "button");
    pageButton.setAttribute("ID", "p"+pageCounter);
    pageButton.setAttribute("value", "page: " + pageCounter);
    pageButton.setAttribute("onclick", "SetActive("+pageButton.id+")");
    document.getElementById("pageArea").append(pageButton);
    SetActive(pageButton)
}

function SetActive(p){
    var page = p;
    var listPages = document.getElementById("pageArea");
    var listButtons = document.getElementById("pageButtonArea");
    activePage = page.id;

    for(let i = 0; i < listPages.children.length; i++){
        var curPage = listPages.children[i];
        curPage.classList.remove('Active');
    }

    for(let i = 0; i < listButtons.children.length; i++)
    {
        var curButton = listButtons.children[i];
        curButton.classList.add('NotVisible');
        if(curButton.id == activePage)
        {
            curButton.classList.remove('NotVisible');
        }
    }
    page.classList.add('Active');
    
}

function CreateButton(){
    var sideButton = document.createElement("input");

    sideButton.setAttribute("type", "button");
    sideButton.setAttribute("ID", activePage);
    sideButton.setAttribute("value", "button: " + activePage);
    document.getElementById("pageButtonArea").append(sideButton);
}

