export const openModal = (popup) => {
  popup.classList.add('popup_is-opened');
  popup.addEventListener('click', closeOverlay);
  document.addEventListener('keydown', closeKey);
};

export const closeModal = () => {
  const openPopup = document.querySelector('.popup_is-opened');
  openPopup.classList.remove('popup_is-opened');
  openPopup.removeEventListener('click', closeOverlay);
  document.removeEventListener('keydown', closeKey);
};

const closeOverlay = (evt)=> {
 if (evt.target.classList.contains('popup')){
  closeModal();
 }
};
const closeKey = (evt)=> {
  if (evt.key === 'Escape'){
    closeModal();
  }  
};