
function job() {

    let Name = prompt('Введите свое имя!'),
    burn = +prompt('Ваш год рождения!'),
    now = +prompt('Нынешний год!'),
    age = now - burn;

    if(age > 0){

    alert(Name + ', ваш возраст ' + age)
    }else{
    alert(Name + 'Попробуйте снова ввести правильные данные!')
}
}

job()
