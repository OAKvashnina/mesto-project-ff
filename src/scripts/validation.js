const isValid = (formElement, inputElement, validConf) => {
  if (inputElement.validity.patternMismatch) {
  inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
  inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validConf);
  } else {
    hideInputError(formElement, inputElement, validConf);
  }
}; 

const showInputError = (formElement, inputElement, errorMessage, validConf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validConf.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validConf.errorClass);
};

const hideInputError = (formElement, inputElement, validConf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validConf.inputErrorClass);
  errorElement.classList.remove(validConf.errorClass);
  errorElement.textContent = '';
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, validConf) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validConf.inactiveButtonClass);
  } 
  else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validConf.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, validConf) => {
  const inputList = Array.from(formElement.querySelectorAll(validConf.inputSelector));
  const buttonElement = formElement.querySelector(validConf.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validConf);
      toggleButtonState(inputList, buttonElement, validConf);
    });
  });
};

export const enableValidation = (validConf) => {
  const formList = Array.from(document.querySelectorAll(`${validConf.formSelector}`));
  formList.forEach((formElement) => {
    setEventListeners(formElement, validConf);
  });
};

export const clearValidation = (form, validConf) => {
  const inputElements = Array.from(form.querySelectorAll(validConf.inputSelector));
  const buttonElement = form.querySelector(validConf.submitButtonSelector);
  toggleButtonState(inputElements, buttonElement, validConf);
  inputElements.forEach((inputElement) => { 
    inputElement.classList.remove(validConf.inputErrorClass);
    const errorElement = form.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(validConf.errorClass);
    errorElement.textContent = '';
  });
};