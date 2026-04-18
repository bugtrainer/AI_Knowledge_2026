#!/bin/bash
echo "Starting Custom Vercel Build for Quartz..."

# 1. Download Quartz into a temporary folder
git clone https://github.com/jackyzha0/quartz.git quartz-site
cd quartz-site

# 2. Install Quartz dependencies
npm install

# 3. Clean out the default content directory
rm -rf content
mkdir content

# 4. Copy all Obsidian Markdown files from the root into the Quartz content folder
# We use rsync to copy everything except the temporary quartz folder itself
rsync -av --exclude='quartz-site' ../ content/

# 5. Customize the site title
sed -i 's/pageTitle: "Quartz 4"/pageTitle: "AI Encyclopedia 2026"/g' quartz.config.ts

# 6. Disable the emoji image plugin to prevent the crash we saw earlier
sed -i 's/Plugin.CustomOgImages()/\/\/ Plugin.CustomOgImages()/g' quartz.config.ts

# 7. Build the static site
npx quartz build

# 8. Move the completed website out to the root so Vercel can serve it
mv public ../public
echo "Build complete!"
