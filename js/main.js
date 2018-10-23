//remove all attributes for onclick in menu dropdown
let width = screen.width;
if(width > 1024)
{
    document.querySelector('.dropbtn').removeAttribute("onclick");
    let dropdown = document.querySelector('.dropdown-content').getElementsByTagName('*');
    for(let i = 0; i < dropdown.length; i++){
        dropdown[i].removeAttribute("onclick");
    }
}

function showHoursPopup(){
    let element = document.getElementById('hours');
    element.classList.toggle("show");
}

function closeHoursPopup(){
    let element = document.getElementById('hours');
    element.classList.toggle("show");
}

//Deal with Mobile Click
function openMenu(){
    let menu = document.querySelector('.dropdown-content');
    if(menu.style.display === 'block')
    {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function closeMenu(){
    let menu = document.querySelector('.dropdown-content');
    menu.style.display = 'none';
}

