# reveal-slide-vite

Effortless Reveal.js slide creation with Vite and external file support.

## Overview

This project provides a streamlined way to create and manage Reveal.js presentations using Vite. It supports loading slides from external HTML files and includes hot module replacement (HMR) for a smooth development experience.

## View the Presentation Online
You can view the presentation online at [https://iegorov.github.io/reveal-slide-vite/](https://iegorov.github.io/reveal-slide-vite/).

## Features

- **Reveal.js Integration**: Easily create presentations with the powerful Reveal.js library.
- **Markdown Support**: Write slides in Markdown for simplicity.
- **Syntax Highlighting**: Highlight code snippets using Highlight.js.
- **Hot Module Replacement**: Automatically reload slides on changes.
- **External Slide Files**: Organize slides in separate HTML files.

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd reveal-slide-vite
   ```
2. Install dependencies:
  ```sh
  npm install
  ```
3. Use the specified Node.js version (not working in Windows):
  ```sh
  nvm use
  ```

### Development

Start the development server:
```sh
npm run dev
```

This will start a Vite development server with hot module replacement enabled.

### Building

```sh
npm run build
```

### GitHub Pages Deployment

To deploy your presentation to GitHub Pages:

1. Ensure your GitHub repository is set up to use the ```gh-pages``` branch for deployment.
2. Go to the settings of your GitHub repository (Settings).
3. In the Pages section, select the ```gh-pages``` branch and the ```/ (root)``` directory for deployment.
4. Save the changes.

### Deploy

```sh
npm run deploy
```

The built files will be output to the dist directory.

### Project Structure
- main.js: Initializes Reveal.js with plugins and settings.
- slides: Contains the slide files organized in subdirectories.
- slides-loader.js: Loads slide contents from the slides directory.
- vite.config.js: Vite configuration with plugins for HTML injection and HMR.

License
This project is licensed under the GNU General Public License v3.0. See the LICENSE file for details.
