
// @todo: Функция создания карточки
const createCard = (cardData) => {
  const cardElement = cardData.cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const likeBtn = cardElement.querySelector('.card__like-button');
  cardImage.src = cardData.card.link;
  cardImage.alt = cardData.card.name;
  cardElement.querySelector('.card__title').textContent = cardData.card.name;
  cardDeleteButton.addEventListener('click', cardData.deleteCard);
  cardImage.addEventListener('click', () => {
    cardData.openCard(cardData.card.name, cardData.card.link)
  });
  likeBtn.addEventListener('click', cardData.likeCard);
  return cardElement;
};
// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  evt.target.closest('.places__item').remove();
};
//функция для лайка
const likeCard = (evt) => {
  evt.target.classList.toggle('card__like-button_is-active');
};

export {createCard, deleteCard, likeCard};