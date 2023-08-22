/**
 * Получение случайного элемента массива
 */
function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

// Определяем массив
var arr = [
'Лис', 
'Кис', 
'Тот, кто старше', 
'Тот, кто младше', 
'Тот, кто выше', 
'Тот, кто ниже', 
'Тот, кто раньше встал',
'Тот, кто позже встал',
'Тот, кто раньше лег спать',
'Тот, кто позже лег спать',
'Тот, кто раньше скажет « ЛИС »',
'Тот, кто раньше скажет « КИС »',
];

function returnRandElement(){
    document.getElementById('generated-value').innerHTML = arrayRandElement(arr);
}

document.getElementById('btn').onclick = returnRandElement;



//------ для картинок

var arr_pics = [
    'sleep',
    'run',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    'sleep',
    ];

let value = 'sleep'
value = arrayRandElement(arr_pics)

if (value=='sleep') document.getElementById('anim-pic').src='/Pictures/animation_sleep.GIF'
    else document.getElementById('anim-pic').src='/Pictures/animation_run.GIF'
