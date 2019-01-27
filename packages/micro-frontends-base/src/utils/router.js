import { installRouter } from 'pwa-helpers/router.js';

const mainContent = document.querySelector('#main-content');
let currentContent; 
const handleNavigation = (location, event) => {
	const path = decodeURIComponent(location.pathname);
	const page = path === '/' ? 'home' : path.slice(1);
	currentContent && currentContent.removeAttribute('active');
	currentContent = mainContent.querySelector(`#${page}`);
	currentContent && currentContent.setAttribute('active', true);
}

installRouter((location) => handleNavigation(location));