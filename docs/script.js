const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("form");
const hiddenDiv = document.getElementById("hiddenInput");

const langInput = document.getElementById("lang");
const countryInput = document.getElementById("country");
// const sessionTime = document.getElementById("time");
const phoneInput = document.getElementById("phone");


if (nameInput && emailInput) {
  nameInput.addEventListener("input", checkInputs);
  emailInput.addEventListener("input", checkInputs);
}

function checkInputs() {
  if (nameInput.value.trim() && emailInput.value.includes("@") && emailInput.value.includes(".")) {
    submitBtn.disabled = false;
    showHiddenDiv(true);
    submitBtn.classList.add("active");
    submitBtn.innerText = "RESERVE YOUR FREE SPOT";
  } else {
    submitBtn.disabled = true;
    showHiddenDiv(false);
    submitBtn.classList.remove("active");
    submitBtn.innerText = "FILL IN DETAILS ABOVE";
  }
}
function showHiddenDiv(condition) {
  hiddenDiv.style.display = condition ? "block" : "none";
}

// 
const modal = document.getElementById("confirmModal");
const countdownEl = document.getElementById("countdown");

const mName = document.getElementById("mName");
const mEmail = document.getElementById("mEmail");
const mLang = document.getElementById("mLang");
const mCountry = document.getElementById("mCountry");
const mTime = document.getElementById("mTime");
const mPhone = document.getElementById("mPhone");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const sel = document.querySelector("input[name='time']:checked");
    const selectedSession = sel ? sel.value : "Not selected";

    if (mName) mName.textContent = nameInput.value || "";
    if (mEmail) mEmail.textContent = emailInput.value || "";
    if (mLang) mLang.textContent = (langInput && langInput.value) || "Not selected";
    if (mCountry) mCountry.textContent = (countryInput && countryInput.value) || "Not selected";
    if (mTime) mTime.textContent = selectedSession;
    if (mPhone) mPhone.textContent = phoneInput && phoneInput.value ? phoneInput.value : "Not provided";

    if (modal) modal.style.display = "flex";
    localStorage.setItem("username", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("language", langInput.value);
    localStorage.setItem("country", countryInput.value);
    localStorage.setItem("session", selectedSession);
    localStorage.setItem("phone", phoneInput.value);

    // Countdown and redirect
    let seconds = 5;
    countdownEl.textContent = seconds;

    const timer = setInterval(() => {
      seconds--;
      countdownEl.textContent = seconds;

      if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "success.html";
      }
    }, 1000);
  });
}
// 
// if (form) {
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     localStorage.setItem("username", nameInput.value);
//     window.location.href = "success.html";
//   });
// }

const username = document.getElementById("username");
if (username) {
  username.innerText = localStorage.getItem("username") || "Guest";
}

function copyInvite() {
  const text = "Join me at Oneness Global Summit | January 23 to 25, 2026";
  navigator.clipboard.writeText(text.value);
  alert("Invite link copied!");
}

function goRegisterPage() {
    window.location.href = "https://www.ekam.org/";
}
function goBack() {
    window.location.href = "index.html";
}

document.querySelectorAll('.time-input').forEach(radio=>{
  // sync aria-checked on load/change
  const update = ()=> {
    document.querySelectorAll('label.card').forEach(lbl=>{
      const forId = lbl.getAttribute('for');
      const input = document.getElementById(forId);
      lbl.setAttribute('aria-checked', input.checked ? 'true' : 'false');
    });
  };
  radio.addEventListener('change', update);
  radio.addEventListener('input', update);
  update();
});

// support keyboard activation on the label (space/enter)
document.querySelectorAll('label.card').forEach(lbl=>{
  lbl.addEventListener('keydown', e=>{
    if(e.key === ' ' || e.key === 'Enter'){
      e.preventDefault();
      const id = lbl.getAttribute('for');
      document.getElementById(id).click();
      document.getElementById(id).focus();
    }
  });
});
