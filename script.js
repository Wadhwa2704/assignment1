//showing the name after 10 sec
setTimeout(function() {
    document.getElementById('picture').src = 'mypicture.jpg';
    document.getElementById('name').style.display = 'block'; 
    document.getElementById('name').style.paddingleft = '40%';
    document.getElementById('name').style.backgroundcolor='#333';
    document.getElementById('name').style.color='aliceblue';
}, 10000);
//showing current date in footer
var currentDate = new Date();


let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });


document.getElementById('footer').innerHTML += " | Date: " + formattedDate;