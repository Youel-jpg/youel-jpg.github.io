// var who = document.getElementsByName('who')
// var number = document.getElementsByName('number');

var points_menu = document.getElementsByClassName('points');

var who = document.querySelector('input[name="who"]:checked').value;
var number = document.querySelector('input[name="number"]:checked').value;

console.log(who);
console.log(number);

changeCards(who, number);

function changeCards($who, $number){

    var card_block = document.getElementsByClassName('slides');
    var card_block_active = document.getElementById($who+'-'+$number+'-point');

    if ($who=="?"){
        document.getElementsByClassName('points number')[0].style.display = 'none';
        for (var i=0; i<card_block.length; i++){
            card_block[i].style.display="none";
        }
        document.getElementById('bonus').style.display = 'flex';
        document.getElementById('bonus').innerHTML +='\n  <link rel="stylesheet" href="/CSS/cards.css">';
    }
    else{
        document.getElementsByClassName('points number')[0].style.display = 'flex';
        for (var i=0; i<card_block.length; i++){
            card_block[i].style.display="none";
        }
        console.log($who+'-'+$number+'-point');
        card_block_active.style.display = 'flex';
        card_block_active.innerHTML +='\n  <link rel="stylesheet" href="/CSS/cards.css">';
    }
}


function getTypeAndPoints() {
    var who = document.querySelector('input[name="who"]:checked').value;
    var number = document.querySelector('input[name="number"]:checked').value;

    changeCards(who, number);
    
    // console.log(who);
    // console.log(number);
}

points_menu[0].addEventListener("click", getTypeAndPoints);
points_menu[1].addEventListener("click", getTypeAndPoints);
