
import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, deleteCard, likeCard} from './card.js';
import {openModal, closeModal} from './modal.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const profileEdit = document.querySelector('.profile__edit-button');
const profileAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupImg = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');
const popupCloses = document.querySelectorAll('.popup__close');
const formEdit = document.forms['edit-profile'];
const nameInput = formEdit.elements['name'];
const jobInput = formEdit.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formNewPlace = document.forms['new-place'];
const placeNameInput = formNewPlace.elements['place-name'];
const linkInput = formNewPlace.elements['link'];

const openCard = (alt, src) => {
  popupImg.src = src;
  popupImg.alt = alt;
  popupCaption.textContent = alt;
  openModal(popupImage);
};

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  const cardData = {card, cardTemplate, deleteCard, openCard, likeCard};
  placesList.append(createCard(cardData));
});

//Ослеживание клика на кнопку редактирования профиля
profileEdit.addEventListener('click', ()=> {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEdit);
});

profileAdd.addEventListener('click', ()=> {
  openModal(popupNewCard);
});

popupCloses.forEach((popupClose)=> {
  popupClose.addEventListener('click', (evt)=> {
    closeModal();
  });
});

const handleFormEditSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal();
};

formEdit.addEventListener('submit', handleFormEditSubmit);

const handleFormNewSubmit = (evt) => {
  evt.preventDefault();
  let card = {};
  card.name = placeNameInput.value;
  card.link = linkInput.value;
  const cardData = {card, cardTemplate, deleteCard, openCard, likeCard};
  placesList.prepend(createCard(cardData));
  evt.target.reset();
  closeModal();
};

formNewPlace.addEventListener('submit', handleFormNewSubmit);










