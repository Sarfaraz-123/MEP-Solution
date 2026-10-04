# Northline MEP Consultants

A responsive React website concept for an MEP consultancy offering HVAC, fire fighting, plumbing, and basic interior design services. The site presents the service range, project examples, delivery process, and a project enquiry form.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local preview URL in the terminal. To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── Approach.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Services.jsx
├── hooks/
│   └── useReveal.js
├── App.jsx
├── main.jsx
└── styles.css
index.html
package.json
```

## Customize before publishing

- Replace the Northline name, email address, phone number, and location with your consultancy’s details.
- Replace the sample project names and locations with your own portfolio, or remove that section.
- The enquiry form opens a prefilled email draft. Connect it to a form service or backend if you want visitors to submit enquiries without using an email app.

## Built with

- React
- Vite
- Lucide React icons
- CSS, including responsive layouts and subtle motion effects
