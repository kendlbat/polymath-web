function colorCurrentItem(id) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page = urlParams.get('page');
    try {
        document.getElementById("menu-" + page).classList.add("active");
    } catch (error) {
        console.log(error);
    }
}