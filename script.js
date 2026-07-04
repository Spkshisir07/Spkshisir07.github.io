function openVideo(link){
window.open(link,"_blank");
}

const toggle = document.getElementById("toggle");

toggle.onclick = ()=>{
document.body.classList.toggle("light");
};
