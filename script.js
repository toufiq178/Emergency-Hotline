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

document.querySelectorAll(".copy-btn").forEach((item) => {
  item.addEventListener("click", function () {
    copyTotalCount++;

    allCopyCount.innerText = `${copyTotalCount} copy`;
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

      displayCallHistory()
    }



  });




  function displayCallHistory() {
    
    historyContainer.innerHTML = ""
  }