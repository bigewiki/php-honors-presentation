const setup = () => {
  // More info about config & dependencies:
  // - https://github.com/hakimel/reveal.js#configuration
  // - https://github.com/hakimel/reveal.js#dependencies
  Reveal.initialize({
    hash: true,
    dependencies: [
      { src: "plugin/markdown/marked.js" },
      { src: "plugin/markdown/markdown.js" },
      { src: "plugin/notes/notes.js", async: true },
      { src: "plugin/highlight/highlight.js", async: true }
    ]
  });
};

window.onload = setup;
