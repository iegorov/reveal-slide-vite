import fs from 'fs';
import path from 'path';

/**
 * Recursively reads slides from a directory.
 * @param {string} dir - The directory to read slides from.
 * @returns {string[]} An array of slide contents.
 */
function readSlides(dir) {
  const slidesContent = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      slidesContent.push(...readSlides(filePath));
    } else if (stat.isFile()) {
      slidesContent.push(fs.readFileSync(filePath, 'utf-8'));
    }
  });
  return slidesContent;
}

/**
 * Gets the contents of all slides in the 'slides' directory.
 * @returns {string[]} An array of slide contents.
 */
export function getSlides() {
  const slidesDir = path.resolve(__dirname, 'slides');

  // Check if the slides directory exists
  if (!fs.existsSync(slidesDir)) {
    console.log(`Directory ${slidesDir} does not exist. No slides to load.`);
    return [];
  }

  return readSlides(slidesDir);
}
