enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
});

function enableValidation(elements) {
    const listForms = document.querySelectorAll(elements.formSelector);
    listForms.forEach(form => validate(elements, form));
}

function validate(elements, formElement) {
    const inputList = Array.from(formElement.querySelectorAll(elements.inputSelector));
    const buttonElement = formElement.querySelector(elements.submitButtonSelector);


    const showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(elements.errorClass);
    };

    const hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove(elements.errorClass);
    };


    const checkInputValidity = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            hideInputError(formElement, inputElement);
        }
    };

    const toggleButtonState = (inputList, buttonElement) => {
        const hasNotValidInput = inputList.some(
            (inputElement) => !inputElement.validity.valid
        );

        if (hasNotValidInput) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add(elements.inactiveButtonClass);

        } else {
            buttonElement.removeAttribute('disabled');
            buttonElement.classList.remove(elements.inactiveButtonClass);

        }
    };

    const setEventListeners = (formElement) => {

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function() {
                checkInputValidity(formElement, inputElement);
                toggleButtonState(inputList, buttonElement);

            });
        });
    };

    setEventListeners(formElement);

};