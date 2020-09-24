/* global document*/

//image changer
var chgimg = document.querySelector('img');
chgimg.onclick = function () {
    'use strict';
    var imgs = chgimg.getAttribute('src');
    if (imgs === 'images/1.jpg') {
        chgimg.setAttribute('src', 'images/2.jpg');
    } else {
        chgimg.setAttribute('src', 'images/3.jpg');
    }
};
    
//personalised welcome message
var chgname = document.querySelector('button');
var hdng = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name');
    localStorage.setItem('name', myName);
    hdng.textContent = 'Welcome to Qburst, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    hdng.textContent = 'Welcome to Qburst, ' + storedName;
}
chgname.onclick = function () {
    'use strict';
    setUserName();
};
 
    
    

