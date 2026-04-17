const WHATSAPP_NUMBER = "22670237369";
const RECEIVER_EMAIL = "ats.azimut.service@gmail.com";

const form = document.getElementById("quote-form");
const sendWhatsappBtn = document.getElementById("send-whatsapp");
const sendEmailBtn = document.getElementById("send-email");

function getFormMessage() {
  if (!form.checkValidity()) {
    form.reportValidity();
    return null;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim() || "Non renseigne";
  const requestType = document.getElementById("requestType").value;
  const serviceType = document.getElementById("serviceType").value;
  const budget = document.getElementById("budget").value.trim() || "Non precise";
  const details = document.getElementById("details").value.trim();

  return [
    "Bonjour A.T.S,",
    "",
    "Nouvelle demande depuis le site:",
    `Nom: ${fullName}`,
    `Telephone: ${phone}`,
    `Email: ${email}`,
    `Type de demande: ${requestType}`,
    `Service concerne: ${serviceType}`,
    `Budget estimatif: ${budget}`,
    "",
    "Details:",
    details
  ].join("\n");
}

sendWhatsappBtn.addEventListener("click", () => {
  const message = getFormMessage();
  if (!message) {
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

sendEmailBtn.addEventListener("click", () => {
  const message = getFormMessage();
  if (!message) {
    return;
  }

  const subject = "Demande de devis / prestation - Site A.T.S";
  const url = `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = url;
});
