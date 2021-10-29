//  Element Selector
const searchInput = document.querySelector(".search-input");
const searchSubmit = document.querySelector(".search-submit");
const gallery = document.querySelector(".gallery");
const modalGallery = document.querySelector(".modal-gallery");

// Random User API
const url = "https://randomuser.me/api/?results=12";

//  Define function

getUserData(url);
async function getUserData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const user = data.results;
  showUser(user);
  showUserModal(user);
}

const showUser = (user) => {
  gallery.innerHTML = "";
  //console.log(user);
  user.forEach((user) => {
    const { picture, name, email, location } = user;
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.classList.add(`uid-${name.first}`);
    //console.log(newDiv);
    newDiv.innerHTML = ` <div class="card-img-container"><img class="card-img" src="${picture.large}" alt="profile picture"></div>
     <div class="card-info-container">
       <h3 id="name" class="card-name cap">${name.title} ${name.first} ${name.last}</h3>
       <p class="card-text">${email}</p>
      <p class="card-text cap">${location.city} , ${location.country}</p>
      </div>`;
    //console.log(newDiv);
    gallery.append(newDiv);
  });
  document.querySelectorAll(".card").forEach((card) => {
    //console.log(card);
    card.addEventListener("click", (e) => {
      e.preventDefault();
      showModal(e);
    });
  });
};

// Show Modal

function showModal(e) {
  let cardClass = e.target.closest(".card").classList[1];

  let modalDiv = document.querySelectorAll(".modal-container").forEach((el) => {
    console.log(el.id);
  });
}

function showUserModal(user) {
  modalGallery.innerHTML = "";
  let info = "";
  user.forEach((user) => {
    const { picture, name, email, location, phone } = user;

    info += `<div class="modal-container" id="uid-${name.first}" style="display:none">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${name.title} ${name.first} ${name.last}</h3>
            <p class="modal-text">${email}</p>
            <p class="modal-text cap">${location.city} , ${location.country}</p>
            <hr>
            <p class="modal-text">${phone}</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>


    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
</div>`;
    modalGallery.innerHTML = info;
    // console.log(modalGallery);
  });
}
