var age = +prompt('Введите свой возраст: ');

if(age > 0 && age <= 18){
    alert('Вы ещё молоды. Вам нужно учиться');
}else if(age > 18 && age <= 50){
    alert('Вам нужно работать');
}else if(age > 50 && age <= 59){
    alert('Вам скоро на пенсию');
}else if(age > 59 && age <= 150){
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так')
}





var time = +prompt('Введите время:');

switch (time) {
    case 0:
        alert('12 часа ночи');
        break;
    case 1:
        alert('Час ночи');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 3:
        alert('3 часа ночи');
        break;
    case 4:
        alert('4 часа утра');
        break;
    case 5:
        alert('5 часов утра');
        break;
    case 6:
        alert('6 часов утра');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часов утра');
        break;
    case 12:
        alert('12 часов дня');
        break;
    case 13:
        alert('Час дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часов дня');
        break;
    case 18:
        alert('6 часов дня');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера')
        break;
    case 23:
        alert('11 часов вечера');
        break;
    case 24:
        alert('12 часа ночи');
        break;
    default:
        alert('Что-то пошло не так');
        break;
}




var a = +prompt('Введите первую цифру:');

var b = +prompt('Введите вторую цифру:');

var c = +prompt('Введите третью цифру:');

if(a > b && a < c || a > c && a < b){
    alert('Среднее число: ' + a);
}else if(b > a && b < c || b > c && b < a){
    alert('Среднее число: ' + b);
}else if(c > a && c < b || c > b && c < a){
    alert('Среднее число: ' + c);
}else if(a === b && a > c || a < c){
    alert('Среднее число: ' + ((a+b+c)/3));
}else if(a === c && a > b || a < b){
    alert('Среднее число: ' + ((a+b+c)/3));
}else if(b === c && b > a || b < a){
    alert('Среднее число: ' + ((a+b+c)/3));
}else if(a === b && a === c){
    alert('Среднее число: ' + ((a+b+c)/3));
}else {
    alert('Что-то пошло не так');
}