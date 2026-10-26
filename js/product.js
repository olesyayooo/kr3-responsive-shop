"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const products = {
    iphone16: {
      title: "iPhone 16",

      description:
        "iPhone 16 — смартфон Apple с дисплеем Super Retina XDR диагональю 6,1 дюйма, процессором A18 и основной камерой 48 Мп. Модель подходит для повседневного использования, работы с приложениями, фото- и видеосъёмки.",

      price: "89 990 ₽",

      image: "images/iphone.png",

      characteristics: {
        "Дисплей": '6,1" Super Retina XDR',
        "Процессор": "Apple A18",
        "Память": "128 ГБ",
        "Основная камера": "48 Мп",
        "Фронтальная камера": "12 Мп",
        "Разъём": "USB-C",
        "Беспроводная связь": "5G, Wi-Fi, Bluetooth",
        "Цвет": "Чёрный"
      }
    },


    "ipad-air-m3": {
      title: 'iPad Air 11" M3',

      description:
        "iPad Air 11 с процессором M3 — лёгкий и производительный планшет Apple с дисплеем Liquid Retina. Устройство подходит для учёбы, работы с документами, просмотра контента и использования творческих приложений.",

      price: "74 990 ₽",

      image: "images/ipad.png",

      characteristics: {
        "Дисплей": '11" Liquid Retina',
        "Процессор": "Apple M3",
        "Память": "128 ГБ",
        "Основная камера": "12 Мп",
        "Фронтальная камера": "12 Мп",
        "Разъём": "USB-C",
        "Беспроводная связь": "Wi-Fi, Bluetooth",
        "Цвет": "Серый"
      }
    },


    "macbook-air-m4": {
      title: 'MacBook Air 13" M4',

      description:
        "MacBook Air 13 с процессором M4 — компактный и производительный ноутбук Apple с дисплеем Liquid Retina диагональю 13,6 дюйма. Модель подходит для работы, учёбы, программирования и повседневных задач.",

      price: "119 990 ₽",

      image: "images/macbook.png",

      characteristics: {
        "Дисплей": '13,6" Liquid Retina',
        "Процессор": "Apple M4",
        "Оперативная память": "16 ГБ",
        "Накопитель": "256 ГБ SSD",
        "Камера": "12 Мп Center Stage",
        "Разъёмы": "MagSafe, 2 × Thunderbolt 4",
        "Беспроводная связь": "Wi-Fi, Bluetooth",
        "Цвет": "Серебристый"
      }
    }
  };


  const params = new URLSearchParams(window.location.search);

  const productId = params.get("id");

  const product = products[productId];


  if (!product) {
    window.location.href = "catalog.html";
    return;
  }


  const title = document.querySelector("#product-title");

  const description = document.querySelector(
    "#product-description"
  );

  const price = document.querySelector("#product-price");

  const image = document.querySelector("#product-image");

  const breadcrumb = document.querySelector(
    "#product-breadcrumb"
  );

  const caption = document.querySelector(
    "#product-table-caption"
  );

  const characteristics = document.querySelector(
    "#product-characteristics"
  );

  const orderButton = document.querySelector(
    "#product-order-button"
  );


  title.textContent = product.title;

  description.textContent = product.description;

  price.textContent = product.price;

  image.src = product.image;

  image.alt = product.title;

  breadcrumb.textContent = product.title;

  caption.textContent =
    `Основные характеристики ${product.title}`;

  orderButton.dataset.product = product.title;


  Object.entries(product.characteristics).forEach(
    ([name, value]) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");

      const valueCell = document.createElement("td");


      nameCell.textContent = name;

      valueCell.textContent = value;


      row.append(nameCell, valueCell);

      characteristics.append(row);
    }
  );


  document.title = `${product.title} — ShopProject`;
});
