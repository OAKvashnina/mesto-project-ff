import {deleteCardId, putLike, deleteLike} from './api.js';

export const createCard = (cardData) => {
  const cardElement = cardData.cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const likeBtn = cardElement.querySelector('.card__like-button');
  const likes = cardElement.querySelector('.card__likes');
  const dataLikes = cardData.card.likes;
  cardImage.src = cardData.card.link;
  cardImage.alt = cardData.card.name;
  likes.textContent = dataLikes.length;
  cardElement.querySelector('.card__title').textContent = cardData.card.name;
  if (cardData.userId === cardData.card.owner._id){
    cardDeleteButton.addEventListener('click', evt => {
       cardData.deleteCard(evt, cardData.card._id);
    });
  }
  else {
    cardDeleteButton.style.display = 'none';
  }
  cardImage.addEventListener('click', () => {
    cardData.openCard(cardData.card.name, cardData.card.link)
  });
  dataLikes.forEach((like) => {
    if (like._id === cardData.userId){ 
      likeBtn.classList.add('card__like-button_is-active');
    }
  });
  likeBtn.addEventListener('click', evt => {cardData.likeCard(evt, cardData.card._id, likes)});
  return cardElement;
};

export const deleteCard = (evt, cardId) => {
  deleteCardId(cardId)
  .then((res) => {
    evt.target.closest('.places__item').remove();
  })
  .catch((err) => {
    console.log(err);
    alert(err);
  });
  
};

export const likeCard = (evt, cardId, likes) => {
  if(evt.target.classList.contains('card__like-button_is-active')){
    deleteLike(cardId)
    .then((dataCard) => {
      likes.textContent = dataCard.likes.length;
      evt.target.classList.toggle('card__like-button_is-active');
    })
    .catch((err) => {
      console.log(err);
    });
  }
  else{
    putLike(cardId)
    .then((dataCard) => {
      likes.textContent = dataCard.likes.length;
      evt.target.classList.toggle('card__like-button_is-active');
    })
    .catch((err) => {
      console.log(err);
    });
  } 
};