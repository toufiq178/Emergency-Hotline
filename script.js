console.log("hello js");

const heartCount = document.getElementById("heart-count");


let count = 0;


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

    heartCount.innerText = count;
  });
});
