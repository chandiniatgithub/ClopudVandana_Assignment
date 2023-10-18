document.getElementById("submit-btn").addEventListener("click", function() {
    if (validateForm()) {
        displayPopup();
    }
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("survey-form").reset();
});

document.getElementById("close-popup").addEventListener("click", function() {
    hidePopup();
    document.getElementById("survey-form").reset();
});

function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (firstName === "" || lastName === "" || dateOfBirth === "" || country === "" || !gender || profession === "" || email === "" || mobile === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}

function displayPopup() {
    var popup = document.getElementById("popup");
    var popupContent = document.getElementById("popup-content");
    popup.style.display = "block";

    
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var country = document.getElementById("country").value;
    var genderElements = document.getElementsByName("gender");
    var gender = "";
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender += genderElements[i].value + ", ";
        }
    }
    gender = gender.slice(0, -2); 
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
 }