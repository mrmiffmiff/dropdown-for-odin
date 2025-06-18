/* For this to work, you must have a ".visible" class in your CSS that sets display to something other than none.
 * This is also assuming the content is, of course, not normally meant to be visible.
 * Parms:
 * * buttonSelector: A valid CSS selector that refers to the button you wish to control the dropdown
 * * contentSelector: A valid CSS selector that refers to the dropdown content as a whole
 * All aspects of display and styling are beyond the scope of this module, therefore you can likely get quite creative with this.
*/
export default function initDropdown(buttonSelector, contentSelector) {
    const button = document.querySelector(buttonSelector);
    const content = document.querySelector(contentSelector);
    button.addEventListener('click', () => {
        content.classList.toggle("visible");
    })
    window.addEventListener('click', (e) => {
        if (!(e.target.matches(buttonSelector) || e.target.matches(contentSelector))) {
            content.classList.remove("visible");
        }
    })
}