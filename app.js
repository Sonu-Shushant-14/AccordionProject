const ourEle = document.getElementsByClassName("item");
const openEle = document.getElementsByClassName("iconOpen");
const closeEle = document.getElementsByClassName("iconClose");

// console.log(ourEle);

for (let i = 0; i < ourEle.length; i++) {

    closeEle[i].style.display = "none";

  ourEle[i].addEventListener("click", () => {
  const res =   ourEle[i].classList.toggle("active");

  if(res){
    closeEle[i].style.display = "block";
    openEle[i].style.display = "none";

  }else{
    closeEle[i].style.display = "none";
    openEle[i].style.display = "block";
  }
  });
}
