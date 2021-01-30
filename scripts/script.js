let popup = document.querySelector('.popup');
let openBtn = document.querySelector('.profile__edit');
let closeBtn = document.querySelector('.popup__close-btn');
let popupInputName = document.querySelector('.popup__input_type_name');
let popupInputProfession = document.querySelector('.popup__input_type_profession');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let formElement = document.querySelector('.popup__form');


function openPopup() {
    popup.classList.add('popup_opened');
    popupInputName.value = profileName.textContent;
    popupInputProfession.value = profileProfession.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}



// Находим форму в DOM
// Находим поля формы в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let getNameInput = popupInputName.value;
    let getJobInput = popupInputProfession.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    profileName.textContent = getNameInput;
    profileProfession.textContent = getJobInput;
    closePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


openBtn.addEventListener('click', openPopup);

closeBtn.addEventListener('click', closePopup);