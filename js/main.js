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
    const menu = document.querySelector('.dropdown-content');
    menu.style.display = 'none';
}

