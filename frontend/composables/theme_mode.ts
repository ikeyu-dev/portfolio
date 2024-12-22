const DARK_MODE_CLASS = "dark";

export function toggleDarkMode() {
    if (document.documentElement.classList.contains(DARK_MODE_CLASS)) {
        document.documentElement.classList.remove(DARK_MODE_CLASS);
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add(DARK_MODE_CLASS);
        localStorage.theme = "dark";
    }
}
