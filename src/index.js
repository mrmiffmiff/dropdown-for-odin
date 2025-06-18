import "modern-normalize/modern-normalize.css";
import "./styles.css";
import initDropdown from "./modules/dropdown";

const testDropdownButtonSelector = "#dropdownButton";
const testDropdownContentSelector = ".dropdownContent";
initDropdown(testDropdownButtonSelector, testDropdownContentSelector);