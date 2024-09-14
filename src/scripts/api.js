const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-22',
  headers: {
    authorization: 'f57823ec-01fd-411a-a648-de302452211c',
    'Content-Type': 'application/json'
  }
}

export const getProfile = () =>{
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
    })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export const getInitialCards = () =>{
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
    })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export const updateUser = (userName, usedAbout) =>{
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: usedAbout
    })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const addCard = (cardName, cardLink) =>{
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const deleteCardId = (cardId) =>{
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.ok;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const putLike = (cardId) =>{
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const deleteLike = (cardId) =>{
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

export const updateAvatar = (link) =>{
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}