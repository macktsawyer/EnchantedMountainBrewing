'use strict';

let links = document.querySelectorAll(".menuList");

links.forEach((item) =>{
    item.addEventListener('click', ()=>
    {
        let ele = document.getElementById(item.getAttribute('data-link'));
        ele.scrollIntoView({behavior:'smooth', block:'start'});
    })
})

document.getElementById('ageYes').addEventListener('click', function() {
    document.querySelector('#legalAgePrompt').style.display = 'none';
    document.querySelector('#blackOutBlur').style.display = 'none';
});

document.getElementById('ageNo').addEventListener('click', function() {
    document.querySelector('#legalAgePrompt').style.display = 'none';
    window.location.replace('http://www.google.com');
});

document.getElementById('returnToTop').addEventListener('click', function(){
    window.scrollTo(0, 0);
})