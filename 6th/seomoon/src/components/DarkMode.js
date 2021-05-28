
export default class DarkMode {
    constructor({ $target, onClick }) {
        const $darkModeWrapper = document.createElement('div');
        this.$darkModeWrapper = $darkModeWrapper;
        this.$darkModeWrapper.className = 'DarkMode';

        const $darkMode = document.createElement("input");
        this.$darkMode = $darkMode;
        this.$darkMode.type = 'checkbox';
        this.$darkMode.id = 'darkmode';
        this.$darkMode.name = 'darkmode';
        
        const $label = document.createElement("label");
        this.$label = $label;
        this.$label.setAttribute('for', 'darkmode');
        this.$label.innerText = 'Dark Mode';
        this.$label.className = '.DarkModeLabel';

        this.$darkModeWrapper.appendChild($darkMode);
        this.$darkModeWrapper.appendChild($label);

        $target.appendChild($darkModeWrapper);

        $darkMode.addEventListener('click', onClick);
    }
}