(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('clic')
            }
    }
    window.addEventListener("load", start);
})();