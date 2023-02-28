/*name:Ariya Agnihothri Mini Suresh
  student id:301278498
  Date:27/02/2023
*/
(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure")) {
                    event.preventDefault();
                    window.location.assign('/bookList');
                }
            });
            }
    }
    window.addEventListener("load", start);
})();