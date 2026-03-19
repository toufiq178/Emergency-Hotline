console.log("hello js");

let copyTotalCount = 0;
let heartTotalCount = 0;

const heartCount = document.getElementById("heart-count");
const allCopyCount = document.getElementById("all-copy-count");




document.querySelectorAll(".heart-icon").forEach((item) => {
  // console.log(item);

  item.addEventListener("click", function () {


    

    // isLiked = !isLiked
    if (item.classList.contains("liked")) {

      count--;
      item.classList.remove("liked" , 'fa-solid', "text-red");
      item.classList.add("fa-regular")
      
    } else {
        count++;
        item.classList.add("liked", "fa-solid" , "text-red");
        item.classList.remove("fa-regular")
    }

    heartCount.innerText = heartTotalCount;
  });
});

document.querySelectorAll(".copy-btn").forEach(item => {

    item.addEventListener("click" , function () {
        
        copyTotalCount++

        allCopyCount.innerText = `${copyTotalCount} copy`
    })
})