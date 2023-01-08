function checkUserAge() {
    ageOfUser = (document.getElementById("user-age").value);

    if (ageOfUser < 18) {
        alert("You are not old enough.")
    } else {
        return true; 
    }
}

