window.MathJax = {
  loader: {
    load: [
      "input/tex-base",
      "output/svg",
      "ui/menu",
      "[tex]/require",
      "[tex]/boldsymbol",
      "[tex]/ams",
      "[tex]/verb",
      "[tex]/color",
      "[tex]/braket",
    ],
  },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    processEnvironments: true,
    // packages: {'[+]': ['boldsymbol']}
    packages: [
      "base",
      "require",
      "ams",
      "boldsymbol",
      "color",
      "enclose",
      "extpfeil",
      "html",
      "mhchem",
      "newcommand",
      "noerrors",
      "noundefined",
      "physics",
      "unicode",
      "verb",
      "xypic",
      "braket"
    ],
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
