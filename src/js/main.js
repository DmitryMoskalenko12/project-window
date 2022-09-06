"Use strict"
import './slider';
import modal from "./modules/modal";
import form from './modules/form';
import tab from './modules/tabs';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {
modal('.popup_engineer_btn', '.popup_close', '.popup_engineer');
modal('.phone_link', '.popup_close', '.popup');
form('form');
tab('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
timer('2022-09-15', '.timer1');
});