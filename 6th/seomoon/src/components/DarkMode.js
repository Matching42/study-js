const TEMPLATE = '<input type="checkbox">';

export default class DarkMode {
    constructor({ $target, onClick }) {
        const $darkMode = document.createElement("input");
        this.$darkMode = $darkMode;
        this.$darkMode.type = 'checkbox';
        this.$darkMode.id = 'darkmode';
        this.$darkMode.name = 'darkmode';
        
        $target.appendChild($darkMode);
        
        const $label = document.createElement("label");
        this.$label = $label;
        this.$label.for = 'darkmode';
        this.$label.innerText = 'Dark Mode';
        $target.appendChild($label);

        $darkMode.addEventListener('click', onClick);
    }
}