var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
    function setUserName() {
            var myName = prompt("please enter your name");
            localStorage.setItem('name', myName);
            myHeading.textcontent = 'welcome,' + myName;
    }  
     if(!localStorage.getItem('name')) {
         setUserName();
        } else {
            var storedName = localStorage.getItem('name');
            myHeading.textContent = 'I am cool,'  + storedName;
        }
        myButton.onclick = function(){
            setUserName();
        }   
        
        var myImage = document.querySelector('img');
myImage.onclick = function() {
       var mySrc = myImage.getAttribute ('src');
            if(mySrc === 'image/child.jpg') {
                myImage.setAttribute ('src','image/son.jpg');
            } else {
                        myImage.setAttribute ('src','image/child.jpg');
                    }
}