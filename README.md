# IamB1ood GitHub Pages Website

This version needs no Node.js, npm, Netlify, Vite, or build command.

Upload `index.html`, `style.css`, `script.js`, and the `assets` folder directly into the root of your GitHub repository.

Then:
1. GitHub repository → Settings
2. Pages
3. Source: Deploy from a branch
4. Branch: `main`
5. Folder: `/ (root)`
6. Save

Customize `YOUR_INVITE` and `YOUR_EMAIL@example.com` in `index.html`.


## IMPORTANT
The CSS and JavaScript are also embedded directly in index.html, so the website will work even if you upload only index.html.


## Premium edition
This edition has a redesigned premium esports UI, stronger crimson lighting, glass-style navigation, upgraded cards, improved spacing, mobile responsiveness, animated hero orb, and a cleaner coaching/contact experience.


### Contact form fix
The contact form uses the correct `form` class and has defensive responsive sizing rules so fields cannot collapse or overlap.


## Contact form — no Microsoft Edge popup

The contact form now uses FormSubmit via AJAX instead of `mailto:`. It will not open an email app or Microsoft Edge.

Before publishing, replace every occurrence of `YOUR_EMAIL@example.com` with the email address where you want coaching requests delivered.

The first submission may require you to confirm/activate the receiving email with FormSubmit. After that, messages are delivered directly to the configured email.
