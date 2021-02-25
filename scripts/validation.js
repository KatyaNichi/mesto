function enableValidation(elements) {

    const formElement = document.querySelector(elements.formSelector);
    const inputList = Array.from(formElement.querySelectorAll(elements.inputSelector));
    const buttonElement = formElement.querySelector(elements.submitButtonSelector);
    validateAllInputs(inputList, formElement, buttonElement);

    const showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add('popup__input-error_active');
    };

    const hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        errorElement.classList.remove('popup__input-error_active');
    };

    const checkInputValidaty = (formElement, inputElement) => {
        const isInputNotValid = !inputElement.validity.valid;

        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;
            showInputError(formElement, inputElement, errorMessage);
            console.log("ghbdtn");
        } else {
            hideInputError(formElement, inputElement);
        }
    }

    const toggleButtonState = (inputList, buttonElement) => {
        const hasNotValidInput = inputList.some(
            (inputElement) => !inputElement.validity.valid
        );

        if (hasNotValidInput) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add('popup__submit-btn_inactive');
        } else {
            buttonElement.removeAttribute('disabled');
            buttonElement.classList.remove('popup__submit-btn_inactive');
        }
    };

    const setEventListener = (formElement) => {
        formElement.addEventListener('submit', event => {
            event.preventDefault();
        });
    };

    function validateAllInputs(inputList, formElement, buttonElement) {
        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', (event) => {
                checkInputValidaty(formElement, inputElement);
                toggleButtonState(inputList, buttonElement);
            })
        })
    }

    formElement.addEventListener('submit', formSubmitHandler);
    formElementAdd.addEventListener('submit', formSubmitHandler);
};