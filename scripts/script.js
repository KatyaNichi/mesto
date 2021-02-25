const openBtn = document.querySelector('.profile__edit');
const closeBtn = document.querySelector('.popup__close-btn');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputProfession = document.querySelector('.popup__input_type_profession');
const popupInputPlaceLink = document.querySelector('.popup__input_type_placelink');
const popupInputPlaceName = document.querySelector('.popup__input_type_placename');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popup__form');
const formElementAdd = document.querySelector('.popup__form_add');
const popupInput = document.querySelector('.popup__input');
const cardTitle = document.querySelector('.card__title');
const cardImage = document.querySelector('.card__image');
const addNewPlace = document.querySelector('.profile__add-button');
const popupNewPlace = document.querySelector('.popup-newplace');
const popupNewPlaceCloseBtn = popupNewPlace.querySelector('.popup__close-btn');
const formElementCard = popupNewPlace.querySelector('.popup__form');
const popupImage = document.querySelector('.popup-image');
const popedImage = document.querySelector('.popup-image__image');
const popupDescription = document.querySelector('.popup-image__description');
const photoGrid = document.querySelector('.photo-grid');
const templateEl = document.querySelector('.template');
const popupProfile = document.querySelector('.popup-profile');
const closeImageBtn = document.querySelector('.popup-image__close-btn');
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

let popUpCtl = null;
//функция открытия попапов
function openPopup(item) {
    item.classList.add('popup_opened');
    popUpCtl = item;
    window.addEventListener('keyup', handelEsc);
}

//функция закрытия попапов
function closePopup(pop) {
    pop.classList.remove('popup_opened');
    window.removeEventListener('keyup', handelEsc)
}

function handelEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(popUpCtl);
    };
};


//обработка формы данных профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    const getNameInput = popupInputName.value;
    const getJobInput = popupInputProfession.value;
    profileName.textContent = getNameInput;
    profileProfession.textContent = getJobInput;

    closePopup(popupProfile);
}


//функция добавления карточек
function formAddNewCart(evt) {

    evt.preventDefault();

    const getPlaceLink = popupInputPlaceLink.value;
    const getPlaceName = popupInputPlaceName.value;

    const listItem = getItem({ name: getPlaceName, link: getPlaceLink });
    photoGrid.prepend(listItem);
    popupInputPlaceLink.value = ''
    popupInputPlaceName.value = ''
    closePopup(popupNewPlace);
}


//добавление новых карточек
function render() {
    const html = initialCards
        .map(getItem)
    photoGrid.append(...html);
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.card__title');
    headerEl.textContent = item.name;
    const imgEl = newItem.querySelector('.card__image');
    imgEl.src = item.link;
    imgEl.alt = item.name;

    const removeBtn = newItem.querySelector('.card__remove');
    removeBtn.addEventListener('click', evt => {
        const targetEl = evt.target;
        const targetItem = targetEl.closest('.card');
        targetItem.remove();
    });

    const cardLikeBtn = newItem.querySelector('.card__like');
    cardLikeBtn.addEventListener('click', evt => {
        evt.target.classList.toggle('card__like_active')
    });


    imgEl.addEventListener('click', () => {
        openPopup(popupImage);
        popedImage.src = item.link;
        popupDescription.textContent = item.name;
    });

    return newItem;
}
render();


///функция удаления карточки 
function deleteCard(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.card');
    targetItem.remove();
}

//слушатели событий

formElementCard.addEventListener('submit', formAddNewCart);

openBtn.addEventListener('click', () => {
    openPopup(popupProfile);
    popupInputName.value = profileName.textContent;
    popupInputProfession.value = profileProfession.textContent;
});

addNewPlace.addEventListener('click', () => {
    openPopup(popupNewPlace);
    popupInputPlaceName.value = '';
    popupInputPlaceLink.value = '';
});

closeBtn.addEventListener('click', () => {
    closePopup(popupProfile);
})


popupNewPlaceCloseBtn.addEventListener('click', () => {
    closePopup(popupNewPlace);
})


closeImageBtn.addEventListener('click', () => {
    closePopup(popupImage);
})


popupImage.addEventListener('click', closeOverlay);
popupNewPlace.addEventListener('click', closeOverlay);
popupProfile.addEventListener('click', closeOverlay);

function closeOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}




enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn'
});

enableValidation({
    formSelector: '.popup__form_add',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn'
});

addEventListener