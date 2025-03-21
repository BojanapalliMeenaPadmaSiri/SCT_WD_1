function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}

function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});