let share = document.querySelector(".arrow");
let icons = document.querySelector(".remove");
let share_area = document.querySelector(".share_section");

let sharee = () => {
   if(icons.style.display === "none"){
    if(screen.width <= 400){
        share_area.style.backgroundColor = "hsl(217, 19%, 35%)";
    }
       icons.style.display = "block";
   }else{
    if(screen.width <= 400){
        share_area.style.backgroundColor = "white";
    }
       icons.style.display = "none";
   }
}

share.addEventListener("click", sharee, false);
