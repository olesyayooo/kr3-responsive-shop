document.querySelector('#order-page-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.querySelector('#order-page-status').hidden = false;
  form.reset();
});
