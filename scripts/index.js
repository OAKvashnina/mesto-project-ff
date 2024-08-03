// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
const createCard = (card, deleteCard) => {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardDeleteButton.addEventListener("click", deleteCard);
  return cardElement;
};

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest('.places__item').remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
  placesList.append(createCard(card, deleteCard));
});
