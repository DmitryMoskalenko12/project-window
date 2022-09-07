"Use strict"
import './slider';
import modal from "./modules/modal";
import form from './modules/form';
import tab from './modules/tabs';
import timer from './modules/timer';
import allInfo from './modules/getInfo';

 const allData = {};
window.addEventListener('DOMContentLoaded', () => {
modal('.popup_engineer_btn', '.popup_close', '.popup_engineer', true);
modal('.phone_link', '.popup_close', '.popup', true);
modal('.glazing_price_btn', '.popup_calc_close', '.popup_calc', false);
modal('.popup_calc_button', '.popup_calc_profile_close', '.popup_calc_profile', false);
modal('.popup_calc_profile_button', '.popup_calc_end_close', '.popup_calc_end', false);
form('form', 'input', allData);
tab('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
tab('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
timer('2022-09-15', '.timer1');
allInfo(allData);
});