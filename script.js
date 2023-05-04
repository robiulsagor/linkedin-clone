const drop_btn = document.querySelector(".dropdown-btn")
const user_dropdown = document.querySelector(".user-dn")

drop_btn.addEventListener("click", () => {
    user_dropdown.classList.toggle("show")
})

// close dropdown menu if clicked outside
document.addEventListener("click", e => {
    // const userOptions = document.querySelector(".user-options")
    let targetEl = e.target
    do {
        if (targetEl == user_dropdown || targetEl == drop_btn) {
            // alert("clicked inside!")
            return
        }

        targetEl = targetEl.parentNode
    } while (targetEl)

    if (user_dropdown.classList.contains("show")) {
        user_dropdown.classList.remove("show")
    }
})

// show sidebar on click
const showMoreLink = document.getElementById("showMoreLink")
const sideBarActivity = document.querySelector(".sidebar-activity")
const plusOrMinus = document.getElementById("plusOrMinus")

showMoreLink.addEventListener("click", () => {

    sideBarActivity.classList.toggle("show")

    if (sideBarActivity.classList.contains("show")) {
        showMoreLink.innerHTML = "Show Less <b>-</b>"
    } else {
        showMoreLink.innerHTML = "Show More <b>+</b>"

    }
})