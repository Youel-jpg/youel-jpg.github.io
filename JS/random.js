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