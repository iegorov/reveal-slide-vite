import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'highlight.js/styles/monokai.css';

const deck = new Reveal();
deck.initialize({
  hash: true, // Включение хеширования для отслеживания слайдов
  slideNumber: true,
  history: true, // Включение истории для переходов между слайдами
  transition: 'slide',
  plugins: [RevealMarkdown, RevealHighlight],
});
