var form = document.getElementById("contact-form");


$(window).on('load', function () {
  $('#welcome').modal('show');
});


window.onload = function () {
  Calendly.initBadgeWidget({
    url: 'https://calendly.com/rezinbotanicals',
    text: 'Schedule time with us',
    color: '#00a2ff',
    textColor: '#ffffff',
    branding: true
  });

  var el = document.getElementById('g-recaptcha-response');
  if (el) {
    el.setAttribute('required', 'required');
  }
}

$(window).scroll(function () {
  $(".contact").css("background-position", "50% " + ($(this).scrollTop() / 20) + "px");
});

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)