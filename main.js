const bPArr = [
  {
    img: "budapest-10.jpg",
    title: "Parlament and Danube",
    descript:
      "Budapest, Hungary's capital on the Danube, mesmerizes with iconic landmarks like Parliament and Buda Castle. The Jewish Quarter's ruin bars and diverse cuisine add vibrancy to this enchanting city.",
  },
  {
    img: "budapest-50.jpg",
    title: "Fisherman's Bastion",
    descript:
      "At Buda's Castle Hill, the Hungarian Fisherman's Bastion is a fairytale-like terrace offering panoramic views of Budapest. This neo-Gothic and neo-Romanesque architectural gem, adorned with seven towers, enchants visitors with its whimsical charm.",
  },
  {
    img: "budapest-72.jpg",
    title: "Budapest Castle Hill",
    descript:
      " Matthias Church in Budapest, a Gothic masterpiece, captivates with its stunning architecture and historical significance on Buda's Castle Hill.",
  },
  {
    img: "budapest-76.jpg",
    title: "St. Stephen's Basilica",
    descript:
      "St. Stephen's Basilica in Budapest stands as a neoclassical marvel, housing the revered Saint Stephen's mummified hand and offering breathtaking city panoramas. He had six fingers on his right hand",
  },
  {
    img: "budapest-104.jpg",
    title: "Széchenyi Chain Bridge",
    descript:
      "Széchenyi Chain Bridge, an iconic Budapest link across the Danube, combines stunning aesthetics with historical significance, connecting Buda and Pest.",
  },
  {
    img: "budapest-122.jpg",
    title: "Hungarian Parliament",
    descript:
      "Budapest's Parliament, an architectural marvel, boasts intricate details inspired by Gothic and Renaissance styles, overlooking the Danube as a symbol of Hungary's grandeur.",
  },
];
const mainSlider = document.querySelector(".main-slideshow");
const thumbnailsHTml = document.querySelector(".thumbnail-pics");
const figureHtml = document.querySelector("figure");
const descriptionHtml = document.querySelector(".description-main");
const moveLeft = document.querySelector("#btn-left");
const moveRight = document.querySelector("#btn-right");

bPArr.forEach((item) => {
  thumbnailsHTml.innerHTML += ` <img class="thumbnail-img" src="./img/${item.img}" alt="" />`;
});

bPArr.forEach((item, index) => {
  if (index === 0) {
    figureHtml.innerHTML += `<img class="active" src="./img/${item.img}" alt="" />`;
    descriptionHtml.innerHTML += `<h3 class="active">${item.title}</h3>`;
    descriptionHtml.innerHTML += `<p class="active">${item.descript}</p>`;
  } else {
    figureHtml.innerHTML += `<img  src="./img/${item.img}" alt="" />`;
    descriptionHtml.innerHTML += `<h3 >${item.title}</h3>`;
    descriptionHtml.innerHTML += `<p >${item.descript}</p>`;
  }
});

let currentImg = 0;
let currTitle = 0;

moveLeft.addEventListener("click", () => {
  let arrImgs = document.querySelectorAll("figure img");
  let arrTitles = document.querySelectorAll("h3");

  arrImgs[currentImg].classList.remove("active");
  arrTitles[currTitle].classList.remove("active");
  if (currentImg == 0 && currTitle == 0) {
    currentImg = arrImgs.length - 1;
    currTitle = arrTitles.length - 1;
  } else {
    currentImg--;
    currTitle--;
  }

  arrImgs[currentImg].classList.add("active");
  arrTitles[currTitle].classList.remove("active");
});

moveRight.addEventListener("click", () => {
  let arrImgs = document.querySelectorAll("figure img");
  arrImgs[currentImg].classList.remove("active");

  if (currentImg == arrImgs.length - 1) {
    currentImg = 0;
  } else {
    currentImg++;
  }

  arrImgs[currentImg].classList.add("active");
});
