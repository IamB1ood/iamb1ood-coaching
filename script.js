const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.onclick=()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='74px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px 7vw';nav.style.flexDirection='column';nav.style.background='#080808';nav.style.borderBottom='1px solid #222'};document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.removeAttribute('style'));document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const status = document.getElementById('status');
  const button = form.querySelector('button[type="submit"]');
  const data = new FormData(form);

  status.textContent = 'Sending message...';
  button.disabled = true;
  button.style.opacity = '.65';

  try {
    const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL@example.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });

    if (!response.ok) throw new Error('Request failed');

    form.reset();
    status.textContent = 'Message sent successfully!';
  } catch (error) {
    status.textContent = 'Could not send the message. Please try again.';
  } finally {
    button.disabled = false;
    button.style.opacity = '1';
  }
});