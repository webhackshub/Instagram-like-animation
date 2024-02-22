var postImage = document.querySelector(".post")
var postLike = document.querySelector(".post i")

postImage.addEventListener("dblclick", function () {
    postLike.style.opacity = 1
    postLike.style.transform = "translate(-50%, -50%) scale(1)"
    setTimeout(function () {
        postLike.style.opacity = 0
    }, 1000)
})