const formElement = document.forms.form;
const formInput = formElement.querySelector('.form__input');

let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле' + input.placeholder + 'не заполнено')
    }
    if (validity.patternMismatch) {
        errors.push('Пароль не надежный')
    }
    if (validity.rangeOverflow) {
        let max = input.max;
        errors.push('Максимальное значение не может быть больше, чем ' + max);
    }
    if (validity.rangeUnderflow) {
        let min = input.min;
        errors.push('Минимальное значение не может быть больше, чем ' + min);
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        checkValidity(input);
    }
    let error = document.querySelector('.error-message');
    error.innerHTML = errors.join('. <br');
}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Отправка!');

});

formInput.addEventListener('input', function (evt) {
    console.log(evt.target.value);
});


//document.getElementById('errorsInfo').innerHTML = errors.join('. <br')

//let fields = form.querySelectorAll('.field')

/*form.addEventListener('submit', function (event) {
    event.preventDefault()

    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i])
        }
    }
})*/

/*for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
        console.log('field is blank', fields[i])
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Cannot be blank'
        form[i].parentElement.insertBefore(error, fields[i])
    }
}*/
