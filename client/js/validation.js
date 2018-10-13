function valUser(form) {
    if (form.firstName.value == "") {
        alert("Error: First Name cannot be blank!");
        form.username.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.firstName.value)) {
        alert("Error: First Name must contain only letters!");
        form.username.focus();
        return false;
    }
    if (form.lastName.value == "") {
        alert("Error: Last Name cannot be blank!");
        form.username.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.lastName.value)) {
        alert("Error: Last Name must contain only letters!");
        form.username.focus();
        return false;
    }

    if (form.username.value == "") {
        alert("Error: Username cannot be blank!");
        form.username.focus();
        return false;
    }
    re = /^\w+$/;
    if (!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.username.focus();
        return false;
    }

    if (form.password.value != "") {
        if (form.password.value.length < 4) {
            alert("Error: Password must contain at least four characters!");
            form.password.focus();
            return false;
        }
        if (form.password.value == form.username.value) {
            alert("Error: Password must be different from Username!");
            form.password.focus();
            return false;
        }
        re = /[0-9]/;
        if (!re.test(form.password.value)) {
            alert("Error: password must contain at least one number (0-9)!");
            form.password.focus();
            return false;
        }
        re = /[a-z]/;
        if (!re.test(form.password.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            form.password.focus();
            return false;
        }
        re = /[A-Z]/;
        if (!re.test(form.password.value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            form.password.focus();
            return false;
        }
    }

    alert("Thank you for creating your account, you will be logged in automatically");
    return true;
}