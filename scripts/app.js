(function(){

    function Start(){

        DisplayHomePage();
    }
    window.addEventListener("load", Start)

    function DisplayHomePage(){

        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click",function()
        {
            location.href = "about.html"
        });

    }

})();

