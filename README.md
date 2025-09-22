# Phase-1-Week-2-Code-Challenge-

## Setup & Troubleshooting

### 1. Start the JSON Server
Make sure you have `json-server` installed globally or use npx:

```bash
npx json-server --watch db.json --port 3000
```

### 2. Serve the HTML File
Use Live Server (VS Code extension) or any static server to serve `index.html`.
Do **not** open the HTML file directly in the browser (file://), as fetch requests may fail due to CORS.

### 3. Common Issues
- **CORS/Network errors:** Always use a local server for HTML.
- **PATCH errors:** Ensure `json-server` is running and supports PATCH. If issues persist, try using PUT.
- **Element not updating:** Make sure all IDs in HTML match those in JS.
- **Port conflicts:** If port 3000 is busy, change the port in both the server command and fetch URLs in JS.

### 4. Browser Console
Check the browser console for errors and network requests to diagnose issues.

---
If you follow these steps, your app should work as expected. For further help, check the issues above or ask for more troubleshooting!