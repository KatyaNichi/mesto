let popup = document.querySelector('.popup');
function openPopup() {  
  popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

let openBtn = document.querySelector('.profile__edit');
openBtn.addEventListener('click', openPopup); 

let closeBtn = document.querySelector('.popup__close-btn');
closeBtn.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let getNameInput = nameInput.value;
    let getJobInput = jobInput.value;
    console.log(getNameInput, getNameInput);
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileProfession = document.querySelector('.profile__profession');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = getNameInput;
    profileProfession.textContent = getJobInput;
    console.log( profileName, profileProfession);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 