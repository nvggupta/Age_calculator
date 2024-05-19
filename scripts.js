const inputDate = document.getElementById("date-input");
const calculateBtn = document.getElementById("btn");
const result = document.getElementById("result");
const ages = document.getElementById("age");

calculateBtn.addEventListener('click', getAge);

function getAge() {
    const birthDate = new Date(inputDate.value);
    console.log(birthDate);
    const today = new Date();

    if (isNaN(birthDate)) {
        alert("Please enter a valid date");
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    ages.innerText = age;
    result.style.display = "block";
}
 
