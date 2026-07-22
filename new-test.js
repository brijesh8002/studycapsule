// Main Dropdown

document.querySelectorAll(".dropdown-toggle-btn").forEach(btn=>{

btn.onclick=function(e){

e.preventDefault();

let menu=this.nextElementSibling;

// Close others

document.querySelectorAll(".custom-menu").forEach(item=>{

if(item!=menu){

item.classList.remove("show");

}

});

menu.classList.toggle("show");

}

});


// Submenu

document.querySelectorAll(".has-submenu > a").forEach(btn=>{

btn.onclick=function(e){

e.preventDefault();

e.stopPropagation();

let sub=this.nextElementSibling;

// Close siblings

this.parentElement.parentElement.querySelectorAll(".submenu").forEach(item=>{

if(item!=sub){

item.classList.remove("show");

}

});

sub.classList.toggle("show");

}

});


// Outside Click

document.addEventListener("click",function(e){

if(!e.target.closest(".custom-dropdown")){

document.querySelectorAll(".custom-menu,.submenu").forEach(item=>{

item.classList.remove("show");

});

}

});