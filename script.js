console.log("hello js");

let copyTotalCount = 0;
let heartTotalCount = 0;
let totalCoins = 99;

const heartCount = document.getElementById("heart-count");
const allCopyCount = document.getElementById("all-copy-count");
const coins = document.getElementById("coins");
const historyContainer = document.getElementById("history-container");

document.querySelectorAll(".heart-icon").forEach((item) => {
  // console.log(item);

  item.addEventListener("click", function () {
    // isLiked = !isLiked
    if (item.classList.contains("liked")) {
      heartTotalCount--;
      item.classList.remove("liked", "fa-solid", "text-red");
      item.classList.add("fa-regular");
    } else {
      heartTotalCount++;
      item.classList.add("liked", "fa-solid", "text-red");
      item.classList.remove("fa-regular");
    }

    heartCount.innerText = heartTotalCount;
  });
});



// document.querySelectorAll(".call-btn").forEach((callBtn) => {
//   callBtn.addEventListener("click", function () {
//     coins.innerHTML = "";
//     console.log("call btn click");

//     if (totalCoins < 20) {
//       alert("you need more coins to call");

//       coins.innerHTML = totalCoins;
//       return;
//     }

//     totalCoins = totalCoins - 20;
//     coins.innerHTML = totalCoins;
//   });
// });

document
  .getElementById("card-container")
  .addEventListener("click", function (e) {
    console.log();

    const card = e.target.closest(".card");

    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
    // console.log(card , serviceName);

    console.log(serviceName);

    if (e.target.classList.contains("copy-btn")) {
      console.log(allCopyCount);

      if (copyTotalCount == 3) {
        alert("you have copy already 3 services");
        return;
      }

      copyTotalCount++;

      allCopyCount.innerText = `${copyTotalCount} copy`;

      navigator.clipboard
        .writeText(serviceName)
        .then(() => {
          console.log("Copied:", serviceName);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    }

    // const serviceNumber = e.target.classList.contains("service-number").innerText;

    // console.log(serviceName , "click sevice name" , serviceNumber , "click service number");

    if (e.target.classList.contains("call-btn")) {
      coins.innerHTML = "";
      console.log("call btn click");

      if (totalCoins < 20) {
        alert("you need more coins to call");

        coins.innerHTML = totalCoins;
        return;
      }

      totalCoins = totalCoins - 20;
      coins.innerHTML = totalCoins;

      displayCallHistory(serviceName, serviceNumber);
    }
  });

function displayCallHistory(serviceName, serviceNumber) {
  const div = document.createElement("div");

  const now = new Date();
  const time = now.toLocaleTimeString();

  console.log(time);
  div.innerHTML = `
    <div class="flex justify-between items-center bg-gray-100 p-5 rounded-2xl">
                            <div>
                                <h2 class="text-xl  ">${serviceName}</h2>
                                <p class="text-lg text-gray-600 ">${serviceNumber}</p>
                            </div>
                            <div>
                                <p class=" text-xl">${time}</p>
                            </div>
                        </div>
    
    `;

  historyContainer.appendChild(div);
}
