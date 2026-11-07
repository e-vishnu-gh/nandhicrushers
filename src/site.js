const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#site-links');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
  });
}

const consultationForm = document.querySelector('#consultation-form');
if (consultationForm) {
  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!consultationForm.reportValidity()) return;
    const data = new FormData(consultationForm);
    const lines = [
      'Hello Nandhi Crushers, I would like a free consultation.',
      `Name: ${data.get('name')}`,
      `Mobile: ${data.get('phone')}`,
      data.get('email') ? `Email: ${data.get('email')}` : '',
      `Project: ${data.get('project')}`,
      `Site visit requested: ${data.get('siteVisit') ? 'Yes' : 'No'}`,
      data.get('details') ? `Details: ${data.get('details')}` : '',
    ].filter(Boolean);
    const target = `https://wa.me/919976289748?text=${encodeURIComponent(lines.join('\n'))}`;
    window.location.assign(target);
  });
}
