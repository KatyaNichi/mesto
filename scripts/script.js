const popup = document.querySelector('.popup');
const openBtn = document.querySelector('.profile__edit');
const closeBtn = popup.querySelector('.popup__close-btn');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputProfession = document.querySelector('.popup__input_type_profession');
const popupInputPlaceLink = document.querySelector('.popup__input_type_placelink');
const popupInputPlaceName = document.querySelector('.popup__input_type_placename');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const formElement = document.querySelector('.popup__form');
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


//функция открытия попапов
function openPopup(item) {
    item.classList.add('popup_opened');
    popupInputName.value = profileName.textContent;
    popupInputProfession.value = profileProfession.textContent;
}


//функция закрытия попапов
function closePopup(pop) {
    pop.classList.remove('popup_opened');
}


//обработка формы данных профиля
function formSubmitHandler(evt) {
    evt.preventDefault();

    const getNameInput = popupInputName.value;
    const getJobInput = popupInputProfession.value;
    profileName.textContent = getNameInput;
    profileProfession.textContent = getJobInput;

    closePopup(popup);
}


//функция добавления карточек
function formAddNewCart(evt) {

    evt.preventDefault();

    const getPlaceLink = popupInputPlaceLink.value;
    const getPlaceName = popupInputPlaceName.value;

    const listItem = getItem({ name: getPlaceName, link: getPlaceLink });
    photoGrid.prepend(listItem);
    popupInput.value = ''
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


    const closeImageBtn = document.querySelector('.popup-image__close-btn');
    closeImageBtn.addEventListener('click', () => {
        closePopup(popupImage);
    })

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
formElement.addEventListener('submit', formSubmitHandler);

formElementCard.addEventListener('submit', formAddNewCart);

openBtn.addEventListener('click', () => {
    openPopup(popup);
});

addNewPlace.addEventListener('click', () => {
    openPopup(popupNewPlace);
});

closeBtn.addEventListener('click', () => {
    closePopup(popup);
})

popupNewPlaceCloseBtn.addEventListener('click', () => {
    closePopup(popupNewPlace);
})