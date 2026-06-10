# Easy Website Guide: How to Download, Edit, and Deploy

This is a simple guide to help you manage the website. Follow these steps one-by-one.

---

## Part 1: How to Download the Code (Clone)

To download the website files to your computer:
1.  Open your command prompt or terminal.
2.  Type this command and press **Enter**:
    ```bash
    git clone https://github.com/shafiudeenM/event-site.git
    ```
3.  Go into the React app folder:
    ```bash
    cd event-site/react-app
    ```
4.  Install the required website libraries by typing:
    ```bash
    npm install
    ```

---

## Part 2: How to Open the Website Locally

To view the website on your computer:
1.  Make sure you are inside the `react-app` folder, then run:
    ```bash
    npm run dev
    ```
2.  You will see a link on the screen: `http://localhost:5173`
3.  Open that link in your web browser. You can now see your website!

---

## Part 3: How to Edit Text and Images (Admin Panel)

> **IMPORTANT:** The admin panel only works correctly through the dev server.  
> Always open it at: **`http://localhost:5173/admin.html`**  
> Do NOT open `admin.html` directly by double-clicking the file.

To change the content of the website:
1.  Make sure the dev server is running (`npm run dev`)
2.  Open **`http://localhost:5173/admin.html`** in your browser
3.  On the left side, select the section you want to change (for example, **Brand & Contact** or **Hero Banner**)
4.  Change the text or select a new image from your computer
    - *Note on images:* If you select a new image, the panel automatically shrinks the file size
5.  Click the green **Save Changes** button at the top right to save to your browser
6.  Click **Live Preview** to see your changes on the website

---

## Part 4: How to Export the Config (business_config.js)

After you finish editing in the Admin Panel:
1.  In the Admin Panel, click the **Export Config** button (bottom of the left sidebar)
2.  A file named **`business_config.js`** will download to your computer (usually in Downloads)
3.  **Replace the file** at this location in your project:
    ```
    react-app/public/business_config.js
    ```
    Simply copy/paste the downloaded file and overwrite the old one.

> After replacing the file, your changes become the permanent defaults — even if someone clears their browser cache.

---

## Part 5: How to Deploy (Go Live)

### Option A — Deploy to Netlify (Recommended — FREE)

1.  Go to **[netlify.com](https://netlify.com)** and create a free account
2.  Make sure you have the latest exported `business_config.js` in `react-app/public/`
3.  Inside the `react-app` folder, build the site:
    ```bash
    npm run build
    ```
4.  This creates a `react-app/dist/` folder with all the files ready for hosting
5.  On Netlify, click **"Add new site" → "Deploy manually"**
6.  Drag and drop the entire **`react-app/dist/`** folder onto the Netlify page
7.  Your website is now live! Netlify gives you a free URL like `your-site.netlify.app`

> **To update the live site later:** Just run `npm run build` again and drag the new `dist/` folder to Netlify.

---

### Option B — Deploy to GitHub Pages (FREE)

1.  Push your code to GitHub (if not already)
2.  Run the build:
    ```bash
    npm run build
    ```
3.  Copy the contents of `react-app/dist/` to the root of your GitHub repo (or a `docs/` folder)
4.  In your GitHub repo → **Settings → Pages → Source**: select the folder you copied to
5.  GitHub will give you a free URL like `yourusername.github.io/event-site`

---

### Option C — Upload to Traditional Web Hosting (cPanel, etc.)

1.  Run the build:
    ```bash
    npm run build
    ```
2.  Upload everything inside the `react-app/dist/` folder to your hosting's **`public_html`** folder using FTP or the cPanel File Manager
3.  Your website is live on your domain!

---

## Quick Workflow Summary

```
Edit in Admin Panel (localhost:5173/admin.html)
        ↓
Click "Save Changes" (saves to browser)
        ↓
Click "Export Config" → download business_config.js
        ↓
Replace react-app/public/business_config.js with the downloaded file
        ↓
Run: npm run build
        ↓
Upload react-app/dist/ folder to your hosting
```
