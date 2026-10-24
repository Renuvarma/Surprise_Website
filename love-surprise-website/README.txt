LOVE SURPRISE WEBSITE — START HERE 💗

FILES
- index.html: the website's content and page sections
- style.css: colours, layout, mobile design, animations
- script.js: YES/NO interactions, card flipping, navigation
- images/: four sample SVG images; replace these with your own photos

OPEN IT LOCALLY
1. Extract this ZIP into a folder you can find easily.
2. Open VS Code.
3. Choose File > Open Folder and select the extracted love-surprise-website folder.
4. Open index.html.
5. For a quick preview, double-click index.html in File Explorer. For a better workflow, install the "Live Server" extension in VS Code, then right-click index.html and choose "Open with Live Server".

ADD YOUR PHOTOS
1. Put four copies of your chosen photos in the images folder.
2. Name them exactly:
   memory-1.jpg
   memory-2.jpg
   memory-3.jpg
   memory-4.jpg
3. Open index.html. Find each sample image path, for example:
   images/memory-1.svg
   Change it to:
   images/memory-1.jpg
4. Repeat for memory-2, memory-3, and memory-4.
5. Save and refresh the preview.
Tip: choose photos you both feel comfortable sharing. Anyone with the public website link may be able to view photos included in it.

PERSONALIZE THE QUESTIONS
Open script.js and find the "questions" array near the top. Edit the text and the yes/no responses. Keep the quotation marks and commas in place.

PERSONALIZE THE LETTER
Open index.html and find the <div id="letterMessage"> section. Replace the sample paragraphs with your own words. You can also edit the heading and signature text around it.

CHANGE THE PAGE TITLE
In index.html, edit the text between <title> and </title>.

PUBLISH USING GITHUB + VERCEL
1. Create a new GitHub repository. For example: love-surprise.
2. Upload index.html, style.css, script.js, README.txt, and the images folder contents. Keep the folder structure exactly as it is.
   Easiest beginner method: on the new GitHub repository page, use "Add file" > "Upload files", drag the files and images folder contents in, then commit the changes.
3. Sign in to Vercel with GitHub and choose Add New > Project.
4. Import the love-surprise repository.
5. For this plain HTML/CSS/JS site, leave the framework preset as "Other". No build command is needed; leave the output directory blank unless Vercel's current interface specifies otherwise.
6. Click Deploy. When it finishes, open the Vercel URL and test the whole site on your phone.
7. Send the URL to your partner only when you're happy with the result.

UPDATING IT LATER
Edit the files in VS Code, save them, then upload/commit the changes to the same GitHub repository. Vercel normally redeploys when changes are pushed to the connected branch.

NOTE
The site doesn't collect or store answers. It runs in the visitor's browser. The floating-heart animation is decorative. Google Fonts requires an internet connection; the page uses fallback fonts if they don't load.
