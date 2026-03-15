//  PHONE NUMBER VALIDATE

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

//const regExp = /\+996 [25679]\d{2} \d{2}- \d{2}- \d{2}/;
//const regExp = /\+996 [25769]\d{2} \d{2}-  \d{2}- \d{2}-/;
const regExp = /^\+996 [25769]\d{2} \d{2}-\d{2}-\d{2}$/;

//phoneButton.onclick = () => {
// if (regExp.test(phoneInput.value)) {
//   phoneResult.textContent = "OK, GOOD!";
//  phoneResult.style.color = "green";
// phoneResult.textContent = "No, ERROR X(";
// phoneResult.style.color = "red";
//}
//};

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerText = "OK, GOOD!";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerText = "NO, ERROR X(";
    phoneResult.style.color = "red";
  }
};

// Регулярные выражения
//const nam = prompt("Whats your name?");
//const regExp = /r/i;
//console.log(nam.match(regExp));

// flags - флаги
// i - ignore case
// g - glabal search
// m - multiline
// y - sticky
// s - space

const numbers = "0123456789fgdgvfg___YYGYGY";
//const regExp = /\w/g;
//const regExp = / \d/;
//const regExp = /\s/g;

console.log(numbers.replace(regExp, "*"));

//console.log(numbers.match(regExp));

// Рукурсия

let num = 0;
const counter = () => {
  num++;
  //console.log(num);
  if (num < 500) {
    requestAnimationFrame(counter);
  }
};
counter();

// Tab slider
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
  tabContentBlocks.forEach((tabBlock) => {
    tabBlock.style.display = "none";
  });
  tabContentItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContentBlocks[i].style.display = "block";
  tabContentItems[i].classList.add("tab_content_item_active");
};

hideTabContent();
showTabContent();

tabContentItemsParent.onmousemove = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabContentItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        hideTabContent();
        showTabContent(tabIndex);
      }
    });
  }
};

let tabIndex = 0;

setInterval(() => {
  tabIndex++;

  if (tabIndex >= tabContentBlocks.length) {
    tabIndex = 0;
  }

  hideTabContent();
  showTabContent(tabIndex);
}, 3000);

// Converter
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter = (element) => {
  element.oninput = () => {
    if (element.value === "") {
      usdInput.value = "";
      eurInput.value = "";
      somInput.value = "";
      return;
    }

    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const data = JSON.parse(request.response);

      if (element.id === "som") {
        usdInput.value = (element.value / data.usd).toFixed(2);
        eurInput.value = (element.value / data.eur).toFixed(2);
      }

      if (element.id === "usd") {
        somInput.value = (element.value * data.usd).toFixed(2);
        eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
      }

      if (element.id === "eur") {
        somInput.value = (element.value * data.eur).toFixed(2);
        usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
      }
    };
  };
};

converter(somInput);
converter(usdInput);
converter(eurInput);
