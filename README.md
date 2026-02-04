# David Alvin - Portfolio Website

Professional portfolio website for deployment at **davidalvin47.github.io**

---

## File Structure

```
portfolio/
  index.html              <- Main webpage
  styles.css              <- All styling
  script.js               <- Animations and interactivity
  assets/
    headshot.jpg           <- Your headshot photo
    David_Alvin_Resume.pdf <- Downloadable resume
```

---

## Step-by-Step: Deploy to GitHub Pages

You only need a GitHub account. No coding knowledge required. Follow each step exactly.

### Step 1: Create a GitHub Account (skip if you already have one)

1. Go to https://github.com
2. Click "Sign up" and create an account with the username **davidalvin47**
3. Verify your email address

### Step 2: Create the Repository

1. Log in to GitHub
2. Click the **+** icon in the top-right corner, then click **New repository**
3. For "Repository name", type exactly: **davidalvin47.github.io**
   - This name MUST match your username. This is what makes it your personal website.
4. Set it to **Public**
5. Do NOT check "Add a README file" (leave it unchecked)
6. Click **Create repository**

### Step 3: Upload Your Files

After creating the repository, you'll see a setup page. Follow these steps:

1. On the repository page, click **"uploading an existing file"** (it's a link in the instructions shown)
2. Open your **portfolio** folder on your computer
3. Drag and drop ALL of the following into the upload area:
   - `index.html`
   - `styles.css`
   - `script.js`
   - The entire `assets` folder (drag the folder itself)
4. Scroll down, type a commit message like "Initial portfolio upload"
5. Click **Commit changes**

### Step 4: Verify the Upload

1. Go to https://github.com/davidalvin47/davidalvin47.github.io
2. You should see all your files listed: `index.html`, `styles.css`, `script.js`, and an `assets` folder
3. Click into the `assets` folder and confirm both `headshot.jpg` and `David_Alvin_Resume.pdf` are there

### Step 5: Enable GitHub Pages

1. In your repository, click **Settings** (the gear icon tab)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Under "Branch", select **main** and folder **/ (root)**
5. Click **Save**

### Step 6: Visit Your Live Website

1. Wait 1-2 minutes for GitHub to build your site
2. Go to: **https://davidalvin47.github.io**
3. Your portfolio is now live!

---

## Making Updates Later

To update your resume, headshot, or any content:

1. Go to your repository on GitHub
2. Navigate to the file you want to replace
3. Click the pencil icon (for text files) or click "Add file" > "Upload files" (for images/PDFs)
4. Upload the new version with the same filename
5. Commit the changes
6. Your site will update within 1-2 minutes

---

## Customization Notes

- **Colors**: The site uses Grand Valley State University blue (#0065A4). To change it, edit the `--blue-primary` value at the top of `styles.css`.
- **Content**: All text content is in `index.html`. Open it in any text editor to change wording.
- **Resume PDF**: Replace `assets/David_Alvin_Resume.pdf` with an updated version anytime. Keep the same filename.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Site shows 404 | Make sure repository name is exactly `davidalvin47.github.io` and `index.html` is in the root (not inside a subfolder) |
| Images not loading | Check that the `assets` folder was uploaded with the files inside it, not as separate files |
| Changes not showing | Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R) and wait 2 minutes |
| Resume download broken | Make sure the file is named exactly `David_Alvin_Resume.pdf` inside the `assets` folder |
