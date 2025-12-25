(function () {
  const form = document.querySelector('form[data-contact-form="true"]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (form.querySelector('[name="name"]')?.value || '').trim();
      const phone = (form.querySelector('[name="phone"]')?.value || '').trim();
      const email = (form.querySelector('[name="email"]')?.value || '').trim();
      const message = (form.querySelector('[name="message"]')?.value || '').trim();

      // WhatsApp click-to-chat (user can copy if they prefer email)
      const to = "218910081613";
      const text = [
        "Touareg NTT Website Inquiry",
        name ? `Name: ${name}` : "",
        phone ? `Phone: ${phone}` : "",
        email ? `Email: ${email}` : "",
        "",
        message ? `Message: ${message}` : ""
      ].filter(Boolean).join("\n");

      const url = `https://wa.me/${to}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    });
  }

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, "", id);
    });
  });
})();
