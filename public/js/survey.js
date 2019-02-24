$(document).ready(function() {
    $('#submit').on("click", event => {
        event.preventDefault();
        if($("#username").val() === "" || $("#firstName".val() === "") || $("#lastName".val() === "")) {
            alert("Please fill out all required forms.")
        }
        else {
            var newUser = {
                username: "jmbw",
                firstName: "joe",
                lastName: "smith",
                nature: 5,
                cost: 5,
                history: 5,
                adventure: 5,
                culture: 5,
                urban: 5,
                activity: 5,
                climate: 5,
                access: 5,
                stay: 5
            }
            $.post("/api/survey", newUser).then(data => {
                console.log(data);
                // $("#bestMatchCity").text(data.city);
                // $("#bestMatchCountry").text(data.country);
                // $("#bestMatchPhoto").attr("src", data.image);
                // $("#bestMatchDesc").text(data.description);
                // $("#bestMatch").modal("show");
            });
        }
    })
});

