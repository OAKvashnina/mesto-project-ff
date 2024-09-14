(()=>{"use strict";var e,t={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-22",headers:{authorization:"f57823ec-01fd-411a-a648-de302452211c","Content-Type":"application/json"}},n=function(e){var t=e.cardTemplate.querySelector(".places__item").cloneNode(!0),n=t.querySelector(".card__delete-button"),o=t.querySelector(".card__image"),r=t.querySelector(".card__like-button"),c=t.querySelector(".card__likes"),a=e.card.likes;return o.src=e.card.link,o.alt=e.card.name,c.textContent=a.length,t.querySelector(".card__title").textContent=e.card.name,e.userId===e.card.owner._id?n.addEventListener("click",(function(t){e.deleteCard(t,e.card._id)})):n.style.display="none",o.addEventListener("click",(function(){e.openCard(e.card.name,e.card.link)})),a.forEach((function(t){t._id===e.userId&&r.classList.add("card__like-button_is-active")})),r.addEventListener("click",(function(t){e.likeCard(t,e.card._id,c)})),t},o=function(e,n){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return e.ok?e.ok:Promise.reject("Ошибка: ".concat(e.status))}))})(n).then((function(t){e.target.closest(".places__item").remove()})).catch((function(e){console.log(e),alert(e)}))},r=function(e,n,o){e.target.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(n).then((function(t){o.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(n).then((function(t){o.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))},c=function(e){e.classList.add("popup_is-opened"),e.addEventListener("click",i),document.addEventListener("keydown",s)},a=function(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",i),document.removeEventListener("keydown",s)},i=function(e){if(e.target.classList.contains("popup")){var t=document.querySelector(".popup_is-opened");a(t)}},s=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");a(t)}},u=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);u(n,o,t),n.forEach((function(n){n.classList.remove(t.inputErrorClass);var o=e.querySelector(".".concat(n.id,"-error"));o.classList.remove(t.errorClass),o.textContent=""}))},d=document.querySelector("#card-template").content,p=document.querySelector(".places__list"),f=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_update-avatar"),y=document.querySelector(".popup_type_image"),C=y.querySelector(".popup__image"),b=y.querySelector(".popup__caption"),S=document.querySelectorAll(".popup__close"),k=document.forms["update-avatar"],g=k.elements.link,q=document.forms["edit-profile"],E=q.elements.name,L=q.elements.description,x=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),P=document.querySelector(".profile__image"),T=document.querySelector(".profile__image-button"),U=document.forms["new-place"],A=U.elements["place-name"],w=U.elements.link,B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(t){var c=t[0],a=t[1];x.textContent=c.name,j.textContent=c.about,P.style.backgroundImage="url(".concat(c.avatar,")"),e=c._id,a.forEach((function(t){var c={card:t,userId:e,cardTemplate:d,deleteCard:o,openCard:D,likeCard:r};p.append(n(c))}))})).catch((function(e){console.log(e)}));var I,D=function(e,t){C.src=t,C.alt=e,b.textContent=e,c(y)};f.addEventListener("click",(function(){E.value=x.textContent,L.value=j.textContent,l(_,B),c(_)})),m.addEventListener("click",(function(){A.value="",w.value="",l(v,B),c(v)})),S.forEach((function(e){e.addEventListener("click",(function(e){var t=document.querySelector(".popup_is-opened");a(t)}))})),I=B,Array.from(document.querySelectorAll("".concat(I.formSelector))).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),u(n,o,t)}))}))}(e,I)})),q.addEventListener("submit",(function(e){var n,o;e.preventDefault(),e.submitter.textContent="Сохранение...",(n=E.value,o=L.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:n,about:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){x.textContent=e.name,j.textContent=e.about,a(_)})).catch((function(e){console.log(e),alert(e)})).finally((function(){e.submitter.textContent="Сохранить"}))})),U.addEventListener("submit",(function(c){var i,s;c.preventDefault(),c.submitter.textContent="Сохранение...",(i=A.value,s=w.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:i,link:s})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(t){var i={card:t,userId:e,cardTemplate:d,deleteCard:o,openCard:D,likeCard:r};p.prepend(n(i)),c.target.reset(),a(v)})).catch((function(e){console.log(e),alert(e)})).finally((function(){c.submitter.textContent="Сохранить"}))})),T.addEventListener("click",(function(){l(h,B),c(h)})),k.addEventListener("submit",(function(e){var n;e.preventDefault(),e.submitter.textContent="Сохранение...",(n=g.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(t){P.style.backgroundImage="url(".concat(t.avatar,")"),e.target.reset(),a(h)})).catch((function(e){console.log(e),alert(e)})).finally((function(){e.submitter.textContent="Сохранить"}))}))})();