const containerEl = document.querySelector(".container")
const btnEl = document.querySelector(".btn")
const popContainerEl = document.querySelector(".popup-container")
const closeIconEl = document.querySelector(".close-icon")
btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popContainerEl.classList.remove("active");
})
closeIconEl.addEventListener("click",()=>{
    popContainerEl.classList.add("active");
    containerEl.classList.remove("active");
})