import "modern-normalize/modern-normalize.css";
import "./styles.css";
import initDropdown from "./modules/dropdown";

const testDropdownButtonSelector = "#dropdownButton";
const testDropdownContentSelector = "#dropdownContentOne";
initDropdown(testDropdownButtonSelector, testDropdownContentSelector);
const testDropdownButtonSelectorTwo = "#dropdownButtonTwo";
const testDropdownContentSelectorTwo = "#dropdownContentTwo";
initDropdown(testDropdownButtonSelectorTwo, testDropdownContentSelectorTwo);