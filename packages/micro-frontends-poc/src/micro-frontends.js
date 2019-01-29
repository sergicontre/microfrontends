import '@microfrontends/angular-web-component-project';
import '@microfrontends/vue-web-component-project';
import '@microfrontends/lit-web-component-project';


const root = document.body;
const rootStyle = getComputedStyle(root);
const colorPicker = document.querySelector('.color-picker');
colorPicker.querySelectorAll('input').forEach((elem) => {
    elem.value = rootStyle.getPropertyValue(`--${elem.id}`).trim();
});

colorPicker.addEventListener('input', (e) => {
    root.style.setProperty(`--${e.target.id}`, e.target.value);
});


// Microapps references
const vueMicroApp = document.querySelector('my-vue-microapp');
const angularMicroApp = document.querySelector('my-angular-microapp');
const litMicroApp = document.querySelector('my-lit-microapp');
const logger = document.querySelector('#logger');
const transfer = document.querySelector('#transfer');

// Connect micro apps to pub/sub pattern (get custom events from microapps)
vueMicroApp.addEventListener('value-changed', (event) => {
    // Vue dispatch event detail as array
    valueChanged(event.target, event.detail[0]);
});

angularMicroApp.addEventListener('value-changed', (event)=>{
    valueChanged(event.target, event.detail);
});

litMicroApp.addEventListener('value-changed', (event)=>{
    valueChanged(event.target, event.detail);
});

// Connect micro apps to pub/sub pattern (set values from pub/sub to microapps)
PubSub.subscribe('value-channel').on((value) => {
    vueMicroApp.value = value;
    angularMicroApp.value = value;
    litMicroApp.value = value;
    
});


const valueChanged = (element, value) => {
    PubSub.publish('value-channel', value);
    const log = document.createElement('li');
    log.innerText = `${element.title} ==> ${value}`;
    logger.appendChild(log);
    logger.scrollTop = logger.scrollHeight;
    logger.parentElement.classList.add('updated');
    transfer.classList.add('rotate');
    setTimeout(() => {
        logger.parentElement.classList.remove('updated');
    }, 500)
    setTimeout(() => {
        transfer.classList.remove('rotate');
    }, 2000);
}

