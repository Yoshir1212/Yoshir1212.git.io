(function(){

    window.addEventListener("load", Start)



    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if (contact.serialize()){
            let key = contact.FullName.substring(0,1) + Date.now();
            localStorage.setItem(key, contact.serialize());
        }
    }


    function DisplayServicesPage(){
        console.log("Services Page")
        let ServiceContent = document.getElementsByTagName("serviceBody")[0];
        let ServiceParagraph = document.createElement("p");
        ServiceParagraph.setAttribute("id","ServiceParagraph")
        ServiceParagraph.setAttribute("class","mt-3")
        ServiceParagraph.textContent = "Have you ever felt a heavy burden holding you down?  A heavy weight on your shoulders?  Sore muscles? \n"  +
        "Do not be alarmed, but there may be a spirit on your shoulders.  Some spirits like to hitch a ride on the living to see how the world has changed.\n"+
        "Not all of them mean harm, but they are harmful if they stay too long.  Fret not!  One of my world-famous Spirit Massages will put your back at ease and let that spirit know to stay away!\n"+
        "Usually a single massage will free you from the spirit, however sometimes a really tough spirit may require multiple sessions.\n"+
        "Cost per session: $175."
        ServiceContent.appendChild(ServiceParagraph);

        let ServiceContent2 = document.getElementsByTagName("serviceBody2")[0];
        let ServiceParagraph2 = document.createElement("p");
        ServiceParagraph2.setAttribute("id","ServiceParagraph2")
        ServiceParagraph2.setAttribute("class","mt-3")
        ServiceParagraph2.textContent = "  Have you ever felt a chill pass through you?  A strange noise?  Are the lights flickering on their own?\n" +
        "Try not to be afraid, but a spirit may be living with you.  You may be unable to see it, but these are the symptoms of a weak spirit living nearby.\n"+
        "It is dangerous to live with any spirit but my team and I can take care of it.  We will come by with our exorcism tools and our patented Spirit Salt\n" +
        "(Spirit Salt can be purchased for ones own use on our products page for only $29.99 a gram!  A huge deal!)\n"+
        "If the spirit is weak enough we will solve your problem in a single visit!  Multiple visits and costs may be necessary if a stronger spirit is found.\n" +
        "Cost of a visit for a weak spirit: $250"
        ServiceContent2.appendChild(ServiceParagraph2);



    }

    function DisplayHomePage(){

        console.log("Index Page")
        $("main").append(`<p id="MainParagraph" class"mt-3"> This is my main paragraph </p>`);
        $("body").append (`<article class="container">
                    <p id="ArticleParagrapgh" class="mt-3"> This is my article paragraph</p></article>`)
        $("#AboutUsBtn").on("click",() =>{
            location.href = "about.html"

        });

        let ButtonContent = document.getElementsByTagName("newButton")[0];
        let ButtonPara = document.createElement("p");
        ButtonPara.setAttribute("id","ButtonPara")
        ButtonPara.setAttribute("class","mt-3")
        var a = document.createElement("BUTTON");
        var t = document.createTextNode("Click me");
        a.appendChild(t);
        a.id = "Secret_Button";
        a.href = "about.html";
        ButtonContent.appendChild(a);


        let SecretButton = document.getElementById("Secret_Button");
        SecretButton.addEventListener("click",function (){
            location.href = "about.html"
        });
    }


    function DisplayContactPage(){
        console.log("Contact Us Page")
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckBox = document.getElementById("subscribeCheckBox");
        sendButton.addEventListener("click",function (){
            if (subscribeCheckBox.checked){
                AddContact(fullName.value, contactNumber.value, emailAddress.value)
            }

        });
    }

    function DisplayProductsPage() {
        console.log("Products Page")
    }
    function DisplayAboutUsPage(){
        console.log("About Page")
    }
    function DisplayContactList(){
        console.log("Contact List Page")

        $("#addButton").on("click",() => {
           location.href = "edit.html#add";
        });

        $("button.delete").on("click", function()  {
           if(confirm("Delete contact, are you sure?")){
               localStorage.removeItem($(this).val())
           }
           location.href = "contact-list.html";
        });

        $("button.edit").on("click", function () {
           location.href = "edit.html#" + $(this).val();
        });

        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                        <td> ${contact.FullName}</td>
                        <td> ${contact.PhoneNumber}</td>
                        <td> ${contact.EmailAddress}</td>
                        <td class="text-center">
                            <button value="" class="btn btn-primary btn-sm edit">
                            <i class="fas fa-edit fa-sm">Edit</i>
                            </button>
                        </td>
                        <td class="text-center">
                            <button value="" class="btn btn-danger  btn-sm delete">
                            <i class="fas fa-trash-alt fa-sm">Delete</i>
                            </button>
                        </td>
                        </tr>`;
                index++;
            }
            contactList.innerHTML = data;
        }
    }

    function DisplayEditPage(){
        console.log("Edit Contact Page")
        let page = location.hash.substring(1);
        switch(page){
            case "add":
                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i> Add`)
                $("#editButton").on("click",(event) => {
                   event.preventDefault();
                    AddContact(fullName.value, contactNumber.value, emailAddress.value)
                    location.href = "contact-list.html"
                });
                $("#cancelButton").on("click",() => {
                    location.href = "contact-list.html"
                });
                break;
            default:{

                let contact = new core.Contact();
                contact.deserialize(localStorage.getItem(page));

                $("#fullName").val(contact.FullName);
                $("#contactNumber").val(contact.PhoneNumber);
                $("#emailAddress").val(contact.EmailAddress);

                $("#editButton").on("click", (event) => {
                   event.preventDefault();
                   contact.FullName = $("#fullName").val();
                   contact.PhoneNumber = $("#contactNumber").val();
                   contact.EmailAddress = $("#emailAddress").val();

                   localStorage.setItem(page, contact.serialize());

                   location.href = "contact-list.html";
                });
                $("#cancelButton").on("click",() => {
                    location.href = "contact-list.html"
                });
            }
            break;
        }
    }
        function Start()
    {
        console.log("App Started!")
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
            case "Contact List":
                DisplayContactList();
                break;
            case "Edit Contact":
                DisplayEditPage();
                break;
        }
    }

})();

