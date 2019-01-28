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

let vueMicroApp = document.querySelector('my-vue-microapp');
let angularMicroApp = document.querySelector('my-angular-microapp');
let litMicroApp = document.querySelector('my-lit-microapp');


vueMicroApp.addEventListener('value-changed', (data)=>{
    PubSub.publish('value-channel', data.detail[0]);
});

angularMicroApp.addEventListener('value-changed', (data)=>{
    PubSub.publish('value-channel', data.detail);
});

litMicroApp.addEventListener('value-changed', (data)=>{
    PubSub.publish('value-channel', data.detail);
});


PubSub.subscribe('value-channel').on((value)=> {
    console.log('===>', value);
    vueMicroApp.value = value;
    angularMicroApp.value = value;
    litMicroApp.value = value;
});