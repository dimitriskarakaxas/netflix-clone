const navigation = document.getElementById("navigation");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
	    navigation.style.background = "rgba(20, 20, 20, 1)";
    } else {
		navigation.style.background = "rgba(20, 20, 20, 0.1)";
    }
});