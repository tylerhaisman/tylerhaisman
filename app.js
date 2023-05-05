//First Project Node
document.getElementById("nq").addEventListener("mouseover", (event) => {
    document.getElementById("o1").style.opacity = "1"; 
    document.getElementById("nq").style.filter = "blur(6px)";
});
document.getElementById("nq").addEventListener("mouseout", (event) => {
    document.getElementById("o1").style.opacity = "0"; 
    document.getElementById("nq").style.filter = "blur(0)";
});
document.getElementById("o1").addEventListener("mouseover", (event) => {
    document.getElementById("o1").style.opacity = "1";
    document.getElementById("nq").style.filter = "blur(6px)";
});
document.getElementById("o1").addEventListener("mouseout", (event) => {
    document.getElementById("o1").style.opacity = "0"; 
    document.getElementById("nq").style.filter = "blur(0)";
});

//Second Project Node
document.getElementById("alto").addEventListener("mouseover", (event) => {
    document.getElementById("o2").style.opacity = "1"; 
    document.getElementById("alto").style.filter = "blur(6px)";
});
document.getElementById("alto").addEventListener("mouseout", (event) => {
    document.getElementById("o2").style.opacity = "0"; 
    document.getElementById("alto").style.filter = "blur(0)";
});
document.getElementById("o2").addEventListener("mouseover", (event) => {
    document.getElementById("o2").style.opacity = "1"; 
    document.getElementById("alto").style.filter = "blur(6px)";
});
document.getElementById("o2").addEventListener("mouseout", (event) => {
    document.getElementById("o2").style.opacity = "0"; 
    document.getElementById("alto").style.filter = "blur(0)";
});

//Third Project Node
document.getElementById("avl").addEventListener("mouseover", (event) => {
    document.getElementById("o3").style.opacity = "1"; 
    document.getElementById("avl").style.filter = "blur(6px)";
});
document.getElementById("avl").addEventListener("mouseout", (event) => {
    document.getElementById("o3").style.opacity = "0"; 
    document.getElementById("avl").style.filter = "blur(0)";
});
document.getElementById("o3").addEventListener("mouseover", (event) => {
    document.getElementById("o3").style.opacity = "1"; 
    document.getElementById("avl").style.filter = "blur(6px)";
});
document.getElementById("o3").addEventListener("mouseout", (event) => {
    document.getElementById("o3").style.opacity = "0"; 
    document.getElementById("avl").style.filter = "blur(0)";
});