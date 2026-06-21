# Food-Spots — Run Instructions

Prereqs: Node.js (install from https://nodejs.org/).

Server:

1. Install dependencies:

```bash
cd server
npm install
```

2. Start the server:

```bash
npm start
# or: node server.js
```

The server listens on `PORT` from `.env` or defaults to `5000`.

Frontend:

- Open `index.html` in a browser, or serve the project root over HTTP (recommended):

```bash
# from repo root
npx http-server . -p 3000
# then open http://localhost:3000
```

If you want, I can add `npm` scripts to serve the frontend or add a single-command setup.
