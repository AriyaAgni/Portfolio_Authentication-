(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('click',(even))
            }
    }
    window.addEventListener("load", start);
})();