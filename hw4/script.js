
function handleUsername(e) {
    const usr = e.currentTarget.value;
    if (usr.toLowerCase() !== usr) {
        alert("Please enter the username in lowercase");
    }
}

function handleAge(e) {
    const age = e.currentTarget.value;
    if (age >= 60 || age < 17) {
        alert("Not eligible to work");
    }
}

function handlePhoneNumber(e) {
    const phone = e.currentTarget.value;
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
    }
}

function handleSave(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;

}
function hideForm(event) {
    event.preventDefault(); 
    const form = document.getElementById("userForm");
    form.style.display = "none";

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;

    const contents = `
    <div id="info">
      <h2>${name}</h2>
      <h3>Software Developer</h3>
      <p><b>Date of Joining:</b> ${dob}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Age:</b> ${age}</p>
      <p><b>Phone:</b> ${phone}</p>
    </div>
  `;
  const container = document.getElementById("card1");
  const infodiv = container.querySelector("#info");
  const lineDiv = container.querySelector("#line");
  
  infodiv.innerHTML = contents;
  infodiv.insertAdjacentElement("beforebegin", infodiv.previousElementSibling);
  infodiv.insertAdjacentElement("afterend", lineDiv);
  const front = document.getElementById("front");
front.style.display = "block";
}

// function handlecard2(event){
// const c1 = document.getElementById("card1");
// c1.style.display="none";
// const dob = document.getElementById('dob').value;
// const contents =`
// <div id="info2">
// <pre><h5>Lorem ipsum, dolor sit amet consectetur 
// adipisicing elit. Ullam, totam in? Possimus ex distinctio ad.</pre></h5>
// <p><b>JOINED DATE :</br>${dob}</p>
// <p><b>EXPIRE DATE :</br>20/12/2030</p>
// <pre><p>Mr.Alok Mishra
//           Signature    </p><pre>
// `
// const container = document.getElementById("card2");
// const info = container.querySelector("#info2");
// const linediv = container.querySelector("#line");
// info.innerHTML = contents;
// info.insertAdjacentElement("beforebegin",info.preveiousElementSibling);
// info.insertAdjacentElement("afterend",linediv);

// const back = document.getElementById("back");
// back.style.display="block";
// }
function handlecard2(event) {
    const c1 = document.getElementById("card1");
    c1.style.display = "none";
    const flipButton = document.getElementById("flipButton");
  flipButton.style.display = "none";
  
    const dob = document.getElementById('dob').value;
    const contents = `
      <div id="info2">
        <pre><h6>Lorem ipsum, dolor sit amet consectetur 
  adipisicing elit. Ullam, totam in? Possimus 
  ex distinctio ad.</pre></h6>
        <p><b>JOINED DATE :</b>${dob}</p>
        <p><b>EXPIRE DATE :</b>20/12/2030</p>
        <pre><p><b>Mr.Alok Mishra</b>
 Signature   </p></pre>
      </div>
    `;
  
    const container = document.getElementById("card2");
    const info = container.querySelector("#info2");
    const linediv = container.querySelector("#line");
  
    info.innerHTML = contents;
    info.insertAdjacentElement("beforebegin", info.previousElementSibling);
    info.insertAdjacentElement("afterend", linediv);
  
    const back = document.getElementById("back");
    back.style.display = "block";
  }
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
}
