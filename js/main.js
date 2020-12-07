//Timer
let deadline = '2020-12-21'; // Задаем дату конца акции , записываем её в переменную deadline

function getTimeRemaining(endtime) {// функция для того чтобы узнать промежуток времени , который лежит между deadline и текущем временем . endtime - параметр в который мы передали deadline
    let nowDate = new Date()// Date = обьект , new - оператор , Мы записываем в переменную nowDate = текующую дату
        endDate = new Date(endtime)// записываем deadline
        result = endDate - nowDate // разница между датами в милисекундах
        seconds = Math.floor((result/1000) % 60),//Math.floor- округляем до целых чисел, данная строка переводим милисекунды в секунды , берем остаток от (result/1000)
        minutes = Math.floor((result/1000/60) % 60),//Math.floor- округляем до целых чисел, данная строка переводим секунды в минуты , берем остаток от (result/1000)
        hours = Math.floor((result/(1000*60*60)));//Math.floor- округляем до целых чисел, данная строка переводим минуты в часы , берем остаток от (result/1000)
    //Наша функция может отдать сразу несколько значений. Мы не можем экспортировать из функции несколько переменных, мы можем экспортировать обьект
    return {//мы говорим функции , что она должна что-то возвращать (какой-то результат)
        'total' : result,//обьект пары 'ключ' : занчение . Подтягиваем значения переменных сверху
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, endtime) {// Функция , которая превращает нашу статическую верстку в динамическую
    let timer = document.getElementById(id), //присваемаем переменной елемент из html с id="time", сначала он попадает в вызов функции внизу, потом попадает в параметры функции "id" , а потом через этот вызов в переменную timer
        hours = timer.querySelector('.hours'),// внутри нашего блока timer в html мы будем искать елементы с такими классами
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);//setInterval метод позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
        
    function updateClock() {//Функция , которая обновляет наши часы каждую секунду
        let resultSecond = getTimeRemaining(endtime); // Вызываем функцию с названием getTimeRemaining со значением deadline . Только deadline в этой функции она присвоилась параметру endtime (стр 20)
//каждый раз когда updateClock будет запускаться , она будет создавать внутри себя let resultSecond = getTimeRemaining(endtime). При чем функция getTimeRemaining будет вызываться каждую секунду и каждую секунду мы будем получать обновленные данные по времени

        hours.textContent = resultSecond.hours;// берем елементы из верстке и помещаем в них данные , которые у нас обновляются каждый раз. Присваеваем количество часов , которое осталось. Выше функция возращает обьект и мы можем достучаться до каждого свойства через "." и этот обьект помещен сейчас в переменную resultSecond. 
        minutes.textContent = resultSecond.minutes;
        seconds.textContent = resultSecond.seconds;

        if (resultSecond.total <= 0) {// весь блок от строки 40-45 Останавливаем таймер на странице
            clearInterval(timeInterval);// Как только это значение будет меньше нуля мы остановим таймер
        }
    }

}

setClock('timer', deadline); //Вызываем функцию с названием "setClock". timer = это айди по которому мы будем искать елемент , deadline = переменная , которую мы обозначили в самом начале