const fnameElem = document.querySelector("#first-name");
const lnameElem = document.querySelector("#last-name");
const emailElem = document.querySelector("#email");
const telElem = document.querySelector("#tel");
const pwElem = document.querySelector("#password");
const pwConfirmElem = document.querySelector("#confirm-password");

const inputsArr = document.querySelectorAll("#signup-form input");

const emailErrElem = document.querySelector(".email-err");
const fnameErrElem = document.querySelector(".first-name-err");
const lnameErrElem = document.querySelector(".last-name-err");
const telErrElem = document.querySelector(".tel-err");
const pwErrElem = document.querySelector(".password-err");
const pwConfirmErrElem = document.querySelector(".confirm-password-err");


const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const nameRegex = /^[A-Za-z]+[\-\s]?[A-Za-z]*$/;
const telCharsRegex = /^\+?[\d\s]+$/;
const telCountRegex = /\d/g;

//password regex
const bigLetterRegex = /[A-Z]+/;
const smallLetterRegex = /[a-z]+/;
const numberRegex = /\d+/;
const spCharRegex = /[\\\|\.\(\)\$\^\*\?\/\+\=\-,;:'"!@#%&<>_`~]+/;
const nrOfCharsRegex = /.{9,}/;

inputsArr.forEach(inp => {
    inp.addEventListener("focus", e => {
        inp.classList.remove("valid");
        inp.classList.remove("invalid");
    });
});
fnameElem.addEventListener("blur", e => {
    const fnameVal = fnameElem.value;

    if(!fnameVal){
        fnameErrElem.textContent = "There must always be a name.";
        fnameElem.setCustomValidity('e.g. "John", "Anne-Marie", "Albus Percival Wulfric Brian"');
        fnameElem.classList.remove("valid");
        fnameElem.classList.add("invalid");
    } else if(!fnameVal.match(nameRegex)){
        fnameErrElem.textContent = "Only letters, spaces and dashes allowed.";
        fnameElem.setCustomValidity('e.g. "John", "Anne-Marie", "Albus Percival Wulfric Brian"');
        fnameElem.classList.remove("valid");
        fnameElem.classList.add("invalid");
    } else {
        fnameErrElem.textContent = "";
        fnameElem.setCustomValidity('');
        fnameElem.classList.remove("invalid");
        fnameElem.classList.add("valid");
    }
});

lnameElem.addEventListener("blur", e => {
    const lnameVal = lnameElem.value;

    if(!lnameVal){
        lnameErrElem.textContent = "There must always be a name.";
        lnameElem.setCustomValidity('e.g. "Obama", "Gordon-Levitt", "van Beethoven"')
        lnameElem.classList.remove("valid");
        lnameElem.classList.add("invalid");
    } else if(!lnameVal.match(nameRegex)){
        lnameErrElem.textContent = "Only letters, spaces and dashes allowed.";
        lnameElem.setCustomValidity('e.g. "Obama", "Gordon-Levitt", "van Beethoven"')
        lnameElem.classList.remove("valid");
        lnameElem.classList.add("invalid");
    } else {
        lnameErrElem.textContent = "";
        lnameElem.setCustomValidity("");
        lnameElem.classList.remove("invalid");
        lnameElem.classList.add("valid");
    }
});

emailElem.addEventListener("blur", (e) => {
    const emailVal = emailElem.value;

    if(!emailVal){
        emailErrElem.textContent = "Email not found.";
        emailElem.setCustomValidity('e.g. "john@gmail.com", "what-is-love@baby.dont.hurt.me", "bob123@example.ca"');
        emailElem.classList.remove("valid");
        emailElem.classList.add("invalid");
    } else if(!emailVal.match(emailRegex)){
        emailErrElem.textContent = "Doesn't look right...";
        emailElem.setCustomValidity('e.g. "john@gmail.com", "what-is-love@baby.dont.hurt.me", "bob123@example.ca"');
        emailElem.classList.remove("valid");
        emailElem.classList.add("invalid");
    } else {
        emailErrElem.textContent = "";
        emailElem.setCustomValidity("");
        emailElem.classList.remove("invalid");
        emailElem.classList.add("valid");
    }
});
telElem.addEventListener("blur", (e) => {
    const telVal = telElem.value;

    if(telVal && !telVal.match(telCharsRegex)){
        telErrElem.textContent = "Numbers, spaces and the '+' sign only.";
        telElem.setCustomValidity('e.g. "1 555 123 1234", "+33 612 123 123", "+48123123123"');
        telElem.classList.remove("valid");
        telElem.classList.add("invalid");
    } else if(telVal && telVal.match(telCountRegex).length < 7){
        telErrElem.textContent = "Phone number must be at least 7 digits long.";
        telElem.setCustomValidity('e.g. "1 555 123 1234", "+33 612 123 123", "+48123123123"');
        telElem.classList.remove("valid");
        telElem.classList.add("invalid");
    } 
    else {
        telErrElem.textContent = "";
        telElem.setCustomValidity("")
        telElem.classList.remove("invalid");
        telElem.classList.add("valid");
    }
});


pwElem.addEventListener("blur", (e) => {
    try{
    const pwVal = pwElem.value;

    if(!pwVal || !pwVal.match(bigLetterRegex) || !pwVal.match(smallLetterRegex) || !pwVal.match(numberRegex) || !pwVal.match(spCharRegex) || !pwVal.match(nrOfCharsRegex)){
        pwElem.setCustomValidity('e.g. "K0n1chiw@0w0", "-^cOOlGuY(55)^-", "1q@W3e!Q2w#E"');
        pwElem.classList.remove("valid");
        pwElem.classList.add("invalid");
    } else {
        pwErrElem.textContent = "";
        pwElem.setCustomValidity("");
        pwElem.classList.remove("invalid");
        pwElem.classList.add("valid");
    }

    if(!pwVal){
        pwErrElem.textContent = "Come up with a password.";
    } else if(!pwVal.match(bigLetterRegex)){

        pwErrElem.textContent = "At least a capital letter, ples.";
    } else if(!pwVal.match(smallLetterRegex)){

        pwErrElem.textContent = "At least a small letter, ples.";
    } else if(!pwVal.match(numberRegex)){

        pwErrElem.textContent = "At least a number, ples.";
    } else if(!pwVal.match(spCharRegex)){

        pwErrElem.textContent = "At least a special character, ples.";
    } else if(!pwVal.match(nrOfCharsRegex)){

        pwErrElem.textContent = "At least 9 characters long, ples.";
    }
} catch(err){
    console.log(err);
}
});

pwConfirmElem.addEventListener("blur", e => {
    const pwVal = pwElem.value;
    const pwConfirmVal = pwConfirmElem.value;

    if(pwConfirmVal !== pwVal || !pwConfirmVal){
        pwConfirmErrElem.textContent = "Passwords must match.";
        pwConfirmElem.setCustomValidity("Type in the same password.")
        pwConfirmElem.classList.remove("valid");
        pwConfirmElem.classList.add("invalid");
    } else {
        pwConfirmErrElem.textContent = "";
        pwConfirmElem.setCustomValidity("");
        pwConfirmElem.classList.remove("invalid");
        pwConfirmElem.classList.add("valid");
    }
});