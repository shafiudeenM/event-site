# Easy Website Guide: How to Download, Edit, and Save Changes

This is a simple guide to help you manage the website. Follow these steps one-by-one.

---

## Part 1: How to Download the Code (Clone)

To download the website files to your computer:
1.  Open your command prompt or terminal.
2.  Type this command and press **Enter**:
    ```bash
    git clone https://github.com/shafiudeenM/event-site.git
    ```
3.  Go into the website folder:
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
1.  Type this command and press **Enter**:
    ```bash
    npm run dev
    ```
2.  You will see a link on the screen: `http://localhost:5173`.
3.  Open that link in your web browser. You can now see your website!

---

## Part 3: How to Edit Text and Images (Admin Panel)

To change the content of the website:
1.  Open this link in your browser: **`http://localhost:5173/admin.html`**
2.  On the left side, select the section you want to change (for example, **Brand & Contact** or **Hero Banner**).
3.  Change the text or select a new image from your computer.
    *   *Note on images:* If you select a new image, the panel will automatically shrink the file size so your website stays fast.
4.  Once you are done editing, click the green **Save Changes** button at the top right.
5.  Check your main website tab—it will update automatically!

---

## Part 4: How to Make Changes Permanent for Everyone

Because the Admin Panel edits are saved inside your own browser first, you need to save them to a file so all visitors can see them.

1.  In the Admin Panel (`admin.html`), click the **Export Config** button in the top bar.
2.  A file named **`business_config.js`** will download to your computer.
3.  **To publish it live:** Upload and replace this file in the folder of your hosting server (where your website is hosted).

No code editing or software commands are needed to publish changes. Simply swap the file on your server!
