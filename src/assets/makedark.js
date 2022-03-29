if (localStorage.doc_theme === undefined || localStorage.doc_theme === 'light') {
    localStorage.doc_theme = 'dark';
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
}