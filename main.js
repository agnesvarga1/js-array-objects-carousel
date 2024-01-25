const bPArr = [
  {
    id: 0,
    img: "budapest-10.jpg",
    title: "Parlament and Danube",
    descript:
      "Budapest, Hungary's capital on the Danube, mesmerizes with iconic landmarks like Parliament and Bua Castle. The Jewish Quarter's ruin bars and diverse cuisine add vibrancy to this enchanting city.",
  },
  {
    id: 1,
    img: "budapest-50.jpg",
    title: "Fisherman's Bastion",
    descript:
      "At Buda's Castle Hill, the Hungarian Fisherman's Bastion is a fairytale-like terrace offering panoramic views of Budapest. This neo-Gothic and neo-Romanesque architectural gem, adorned with seven towers, enchants visitors with its whimsical charm.",
  },
  {
    id: 2,
    img: "budapest-72.jpg",
    title: "Budapest Castle Hill",
    descript:
      " Matthias Church in Budapest, a Gothic masterpiece, captivates with its stunning architecture and historical significance on Buda's Castle Hill.",
  },
  {
    id: 3,
    img: "budapest-76.jpg",
    title: "St. Stephen's Basilica",
    descript:
      "St. Stephen's Basilica in Budapest stands as a neoclassical marvel, housing the revered Saint Stephen's mummified hand and offering breathtaking city panoramas. He had six fingers on his right hand",
  },
  {
    id: 4,
    img: "budapest-104.jpg",
    title: "Széchenyi Chain Bridge",
    descript:
      "Széchenyi Chain Bridge, an iconic Budapest link across the Danube, combines stunning aesthetics with historical significance, connecting Buda and Pest.",
  },
  {
    id: 5,
    img: "budapest-122.jpg",
    title: "Hungarian Parliament",
    descript:
      "Budapest's Parliament, an architectural marvel, boasts intricate details inspired by Gothic and Renaissance styles, overlooking the Danube as a symbol of Hungary's grandeur.",
  },
];

////html element consts
const mainSlider = document.querySelector(".main-slideshow");
const thumbnailsHTml = document.querySelector(".thumbnail-pics");
const figureHtml = document.querySelector("figure");
const descriptionHtml = document.querySelector(".description-main");
const moveLeft = document.querySelector("#btn-left");
const moveRight = document.querySelector("#btn-right");
////add imgs fom obj to html
bPArr.forEach((item, index) => {
  if (index === 0) {
    figureHtml.innerHTML += `<img id="${item.id}" class="active" src="./img/${item.img}" alt=""/>`;
    descriptionHtml.innerHTML += `<h3 class="active">${item.title}</h3>`;
    descriptionHtml.innerHTML += `<p class="active">${item.descript}</p>`;
  } else {
    figureHtml.innerHTML += `<img id="${item.id}" src="./img/${item.img}" alt="" />`;
    descriptionHtml.innerHTML += `<h3 >${item.title}</h3>`;
    descriptionHtml.innerHTML += `<p >${item.descript}</p>`;
  }
});

////create thumb nail elements
bPArr.forEach((item) => {
  thumbnailsHTml.innerHTML += ` <img class="thumbnail-img" src="./img/${item.img}" alt=""  data-objectid="${item.id}"/>`;
});
///current element postions
let currentImg = 0;

const thumbnailsAll = document.querySelectorAll(".thumbnail-img");

let arrImgs = document.querySelectorAll("figure img");
let arrTitles = document.querySelectorAll("h3");
let descArr = document.querySelectorAll("p");

const addTumbactive = () => {
  thumbnailsAll.forEach((item) => item.classList.remove("thumb-active"));
  thumbnailsAll.forEach((thumb, index) => {
    if (index === currentImg) {
      thumb.classList.add("thumb-active");
    }
  });
};

addTumbactive();

const movementL = function () {
  arrImgs[currentImg].classList.remove("active");
  arrTitles[currentImg].classList.remove("active");
  descArr[currentImg].classList.remove("active");
  addTumbactive();
  if (currentImg == 0) {
    currentImg = arrImgs.length - 1;
  } else {
    currentImg--;
  }

  arrImgs[currentImg].classList.add("active");
  arrTitles[currentImg].classList.add("active");
  descArr[currentImg].classList.add("active");
};

const movementR = () => {
  arrImgs[currentImg].classList.remove("active");
  arrTitles[currentImg].classList.remove("active");
  descArr[currentImg].classList.remove("active");
  addTumbactive();
  if (currentImg == arrImgs.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }

  arrImgs[currentImg].classList.add("active");
  arrTitles[currentImg].classList.add("active");
  descArr[currentImg].classList.add("active");
};

thumbnailsAll.forEach((item) => {
  item.addEventListener("click", function () {
    thumbnailsAll.forEach((item) => item.classList.remove("thumb-active"));
    if (!item.classList.contains("thumb-active")) {
      this.classList.add("thumb-active");
    } else {
      item.classList.remove("thumb-active");
    }
  });
});

moveLeft.addEventListener("click", movementL);

moveRight.addEventListener("click", movementR);
