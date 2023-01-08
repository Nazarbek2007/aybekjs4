function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let amount = +prompt('Выберите колличество решаемых примеров!');


for(let i = 1; i <= amount; i++) {
    
    let one = rand(1,50),
    two = rand(1,50),
    sym = rand(1,8);

    if(sym == 1 || sym == 2) {
        let exam = +prompt(one + ' + ' + two + ' = ?')
        let res = exam == (one + two) ? 'МАЛАДЭС' : 'неправильный ответ!'
        alert(one + ' + ' + two + ' = ' + (one + two) + ' Ваш ответ ' + exam + ', ' + res)
    } else if (sym == 3 || sym == 4) {
        let exam = +prompt(one + ' - ' + two + ' = ?')
        let res = exam == (one - two) ? 'МАЛАДЭС' : 'неправильный ответ!'
        alert(one + ' - ' + two + ' = ' + (one - two) + ' Ваш ответ ' + exam + ', ' + res)
    } else if (sym == 5 || sym == 6) {
        let exam = +prompt(one + ' * ' + two + ' = ?')
        let res = exam == (one * two) ? 'МАЛАДЭС' : 'неправильный ответ!'
        alert(one + ' * ' + two + ' = ' + (one * two) + ' Ваш ответ ' + exam + ', ' + res)
    } else if (sym == 7 || sym == 8) {
        let exam = +prompt(one + ' / ' + two + ' = ?')
        let res = exam == (one / two) ? 'МАЛАДЭС' : 'неправильный ответ!'
        alert(one + ' / ' + two + ' = ' + (one / two) + ' Ваш ответ ' + exam + ', ' + res)
    }
}