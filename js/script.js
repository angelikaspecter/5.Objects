// Задание 1
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// const car = {
//     brand: 'BMW',
//     model: 'X5',
//     yearOfCreation: 2022,
//     middleSpeed: 35,
// }

// function displayInfo(object) {
//     console.log(object);
// }
// displayInfo(car);

// function timeToRide(distance, speed) {
//     let time = distance / speed;
//     let relax = (time % 4 == 0) ? (time / 4 | 0) - 1 : time / 4 | 0;
//     let totalTime = time + relax;
//     console.log(`Время в пути = ${totalTime} часов`);
// }
// timeToRide(175, car.middleSpeed);

// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов - дробей.
// 2. Функция вычитания 2-х объектов - дробей.
// 3. Функция умножения 2-х объектов - дробей.
// 4. Функция деления 2-х объектов - дробей.
// 5. Функция сокращения объекта - дроби.

// const number = {
//     numerator: 4,
//     denominator: 12,
// }

// function sumNumber(num1, num2) {
//     console.log(num1 + num2);
// }
// sumNumber(number.numerator, number.denominator);

// function minusNumber(num1, num2) {
//     console.log(num1 - num2);
// }
// minusNumber(number.numerator, number.denominator);

// function multiNumber(num1, num2) {
//     console.log(num1 * num2);
// }
// multiNumber(number.numerator, number.denominator);

// function divisionNumber(num1, num2) {
//     console.log((num1 / num2).toFixed(2));
// }
// divisionNumber(number.numerator, number.denominator);

// function fixNumber(num1, num2) {
//     for (let i = 2; i <= num1; i++) {
//         while (num1 % i === 0 && num2 % i === 0) {
//             num1 /= i, num2 /= i;
//         }
//     }
//     console.log([num1, num2]);

// }
// fixNumber(number.numerator, number.denominator);

// Задание 3
// Создать объект, описывающий время(часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество секунд.
// 3. Функция изменения времени на переданное количество минут.
// 4. Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.Например: если ко времени «20: 30: 45» добавить 30 секунд, то должно получиться
// «20: 31: 15», а не «20: 30: 75».

// const time = {
//     hour: 00,
//     min: 00,
//     sec: 00,
// }

// function displayTime(hour, min, sec) {
//     console.log(hour + ' ' + ':' + ' ' + min + ' ' + ':' + ' ' + sec)
// }
// displayTime(time.hour, time.min, time.sec);

// function changeSec(sec) {
//     time.sec += sec;
//     if (time.sec >= 60) {
//         time.sec %= 60;
//         time.min = Math.round(sec / 60);
//         console.log(time.sec, 'sec', time.min, 'min');
//     } else {
//         console.log(time.sec, 'sec', time.min, 'min');
//     }
// }
// changeSec(66);

// function changeMin(min) {
//     time.min += min;
//     if (time.min >= 60) {
//         time.min %= 60;
//         time.hour = Math.round(min / 60);
//         console.log(time.min, 'min', time.hour, 'hour');
//     } else {
//         console.log(time.min, 'min', time.hour, 'hour');
//     }
// }
// changeMin(66);

// function changeHour(hour) {
//     time.hour += hour;
//     if (time.hour >= 24) {
//         time.hour %= 24;
//         console.log(time.hour, 'hour');
//     } else {
//         console.log(time.hour, 'hour');
//     }
// }
// changeHour(18);

// displayTime(time.hour, time.min, time.sec);