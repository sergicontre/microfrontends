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


// Microapps references
let vueMicroApp = document.querySelector('my-vue-microapp');
let angularMicroApp = document.querySelector('my-angular-microapp');
let litMicroApp = document.querySelector('my-lit-microapp');

// Connect micro apps to pub/sub pattern (get custom events from microapps)
vueMicroApp.addEventListener('value-changed', (data)=>{
    PubSub.publish('value-channel', data.detail[0]);
    changeDataStyle();
});

angularMicroApp.addEventListener('value-changed', (data)=>{
    PubSub.publish('value-channel', data.detail);
    changeDataStyle();
});

litMicroApp.addEventListener('value-changed', (data)=>{
    PubSub.publish('value-channel', data.detail);
    changeDataStyle();
});

// Connect micro apps to pub/sub pattern (set values from pub/sub to microapps)
PubSub.subscribe('value-channel').on((value) => {
  vueMicroApp.value = value;
  angularMicroApp.value = value;
  litMicroApp.value = value;
  setTimeout(() => {
    document.querySelector('#transfer').classList.add('rotate');
  }, 0);
});

const changeDataStyle = () => {
  setTimeout(() => {
    document.querySelector('#transfer').classList.remove('rotate');
  }, 2000);
}
