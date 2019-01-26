import '@microfrontends/angular-web-component-project';
import '@microfrontends/vue-web-component-project';
import '@microfrontends/lit-web-component-project';


let root = document.body;
let rootStyle = getComputedStyle(root);
let colorPicker = document.querySelector('.color-picker');
colorPicker.querySelectorAll('input').forEach((elem) => {
    elem.value = rootStyle.getPropertyValue(`--${elem.id}`).trim();
});

colorPicker.addEventListener('input', (e) => {
    root.style.setProperty(`--${e.target.id}`, e.target.value);
});