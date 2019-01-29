// Performance 

let sum = 0;

const config = {
    characterData: true,
    childList: true,
    subtree: true
}

const measurement = (perfArr, label) => {
    const duration = perfArr[perfArr.length-1].duration
    console.log(`${label} element update duration`, duration.toFixed(4))
    sum = sum + parseFloat(duration.toFixed(4));
}

const mutation = type => _ => {
    performance.mark(`${type}Ends`)
    performance.measure(type, `${type}Starts`, `${type}Ends`);
    measurement(performance.getEntriesByName(type), type);
}

const observerAngular = new MutationObserver(mutation('angular'));
observerAngular.observe(angularMicroApp.shadowRoot, config);

const observerVue = new MutationObserver(mutation('vue'));
observerVue.observe(vueMicroApp.shadowRoot, config);

const observerLit = new MutationObserver(mutation('lit'));
observerLit.observe(litMicroApp.shadowRoot, config);

let iterations = 1000;
let total = 0;
let pid = setInterval(()=>{
        total++;
        performance.mark(`angularStarts`)
        angularMicroApp.value = Math.floor((Math.random() * 10) + 1);

        //  performance.mark(`vueStarts`)
        //  vueMicroApp.value = Math.floor((Math.random() * 10) + 1);

        // performance.mark(`litStarts`)
        // litMicroApp.value = Math.floor((Math.random() * 10) + 1);

        if( total === iterations) {
            console.log(`Total ${sum / iterations} `);
            clearInterval(pid);
        }
},100)