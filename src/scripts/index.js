import '../pages/index.css';
/*import {initialCards} from './cards.js';*/
import {createCard, deleteCard, likeCard} from './card.js';
import {openModal, closeModal} from './modal.js';
import {enableValidation, clearValidation} from './validation.js';
import {getInitialCards, getProfile, updateUser, addCard, updateAvatar} from './api.js';
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const profileEdit = document.querySelector('.profile__edit-button');
const profileAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupUpdateAvatar= document.querySelector('.popup_type_update-avatar');
const popupImage = document.querySelector('.popup_type_image');
const popupImg = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');
const popupCloses = document.querySelectorAll('.popup__close');
const formUpdAvatar = document.forms['update-avatar'];
const avatarInput = formUpdAvatar.elements['link'];
const formEdit = document.forms['edit-profile'];
const nameInput = formEdit.elements['name'];
const jobInput = formEdit.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
const profileImgButton = document.querySelector('.profile__image-button');
const formNewPlace = document.forms['new-place'];
const placeNameInput = formNewPlace.elements['place-name'];
const linkInput = formNewPlace.elements['link'];
let userId;
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

Promise.all([getProfile(), getInitialCards()])
.then((result) => {
  const user = result[0];
  const initialCards = result[1];
  profileTitle.textContent = user.name;
  profileDescription.textContent = user.about;
  profileImage.style.backgroundImage =  `url(${user.avatar})`;
  userId = user._id;
  initialCards.forEach((card) => {
  const cardData = {card, userId, cardTemplate, deleteCard, openCard, likeCard};
  placesList.append(createCard(cardData));
  });

})
.catch((err) => {
  console.log(err);
});

const openCard = (alt, src) => {
  popupImg.src = src;
  popupImg.alt = alt;
  popupCaption.textContent = alt;
  openModal(popupImage);
};

profileEdit.addEventListener('click', ()=> {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
   // Если открыть модальное окно, ввести невалидные данные в поля ввода 
  // и закрыть окно, то при повторном открытии нужно удалить эти ошибки, поэтому вызываем очистку ошибок валидации
  clearValidation(popupEdit, validationConfig);
  openModal(popupEdit);
});

profileAdd.addEventListener('click', ()=> {
  placeNameInput.value = '';
  linkInput.value ='';
  // Если открыть модальное окно, ввести невалидные данные в поля ввода 
  // и закрыть окно, то при повторном открытии нужно удалить эти ошибки, поэтому вызываем очистку ошибок валидации
  clearValidation(popupNewCard, validationConfig);
  openModal(popupNewCard);
});

popupCloses.forEach((popupClose)=> {
  popupClose.addEventListener('click', (evt)=> {
    const openPopup = document.querySelector('.popup_is-opened');
    closeModal(openPopup);
  });
});

const handleFormEditSubmit = (evt) => {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  updateUser(nameInput.value, jobInput.value)
  .then((dataUser) => {
    profileTitle.textContent = dataUser.name;
    profileDescription.textContent = dataUser.about;
    closeModal(popupEdit);
  })
  .catch((err) => {
    console.log(err);
    alert(err);
  })
  .finally(function () { 
    evt.submitter.textContent = 'Сохранить';
  });
};

enableValidation(validationConfig);

formEdit.addEventListener('submit', handleFormEditSubmit);

const handleFormNewSubmit = (evt) => {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  addCard(placeNameInput.value, linkInput.value)
  .then((dataCard) => {
    const card = dataCard;
    const cardData = {card, userId: userId, cardTemplate, deleteCard, openCard, likeCard};
    placesList.prepend(createCard(cardData));
    evt.target.reset();
    closeModal(popupNewCard);
  })
  .catch((err) => {
    console.log(err);
    alert(err);
  })
  .finally(function () { 
    evt.submitter.textContent = 'Сохранить';
  });
};

formNewPlace.addEventListener('submit', handleFormNewSubmit);

profileImgButton.addEventListener('click', ()=> {
  // Если открыть модальное окно, ввести невалидные данные в поля ввода 
  // и закрыть окно, то при повторном открытии нужно удалить эти ошибки, поэтому вызываем очистку ошибок валидации
  clearValidation(popupUpdateAvatar, validationConfig);
  openModal(popupUpdateAvatar);
});
 
const handleFormUpdAvatarSubmit = (evt) => {
  evt.preventDefault();
  evt.submitter.textContent = 'Сохранение...';
  updateAvatar(avatarInput.value)
  .then((dataUser) => {
    profileImage.style.backgroundImage = `url(${dataUser.avatar})`;
    evt.target.reset();
    closeModal(popupUpdateAvatar);
  })
  .catch((err) => {
    console.log(err);
    alert(err);
  })
  .finally(function () { 
    evt.submitter.textContent = 'Сохранить';
  });
};

formUpdAvatar.addEventListener('submit', handleFormUpdAvatarSubmit);