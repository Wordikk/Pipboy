$(document).ready(function () {
    var weapons = [
        {
        "name": "44_pistol",
        "img": "<img src='./img/44_pistol.png' class='inv-wep-img'/>",
        "damage": 48, 
        "ammo": 200,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {
        "name": "10mm_pistol",
        "img": "<img src='./img/Fallout4_10mm_pistol.png' class='inv-wep-img' />",
        "damage": 18, 
        "ammo": 84,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {
        "name": "assault_rifle",
        "img": "<img src='./img/AssaultrifleFO4.png' class='inv-wep-img' />", 
        "damage": 30,
        "ammo": 353, 
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }
    ];


    $('.item-list a').on('mouseenter', function (e) {
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in weapons){
            if(weapons[item].name ==current_item){
                console.log(weapons[item]);

                var container = $('.item-stats');

                container.find('.img').html(weapons[item].img);
                container.find('.damage').html(weapons[item].damage);
                container.find('.ammo').html(weapons[item].ammo);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
                
            }
        }
    });
    
    $('.item-list a').on('click', function (e) {
        
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
        
    });
 
});

function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timer').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
    
} //Clock on map.html

function startDate(){
var cont = document.getElementById('date')
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '.' + dd + '.' + yyyy;
cont.innerHTML = today;
}// Actual date
startDate(), startTime().addEventListener("load");
