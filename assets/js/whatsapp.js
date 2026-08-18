document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const phone = link.dataset.phone;
  const message = link.dataset.message;

  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
});

const whatsappForm = document.getElementById("whatsapp-form");

whatsappForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(whatsappForm);

  const whatsapp = formData.get("whatsapp");
  const message = formData.get("message");

  const phone = "6281269111802";

  const whatsappMessage = `Halo, saya ingin menghubungi Anda.

whatsapp: ${whatsapp}

Message:
${message}`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, "_blank");
});
