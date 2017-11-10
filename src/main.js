import Nav from './scripts/nav';
import { API_URL } from './scripts/constants';
import { getData } from './scripts/dataAPI';
import style from './scss/main.scss';

/** Class representing the main flow for the app */
class Main {
    constructor() {
        this.getData();
        this.currentOpen = null;
        this.isMobile = window.innerWidth <= 768;
        this.overlapElement = document.querySelector('.overlap');
        this.mobileNavOpen = document.querySelector('.nav-open');
        this.mobileNavClose = document.querySelector('.nav-close');
        this.mobileLogo = document.querySelector('.nav-huge-logo');
        this.navWrapper = document.querySelector('.nav-wrapper');
    }
    toggleOverlap(toggle) {
        if (toggle) {
            this.overlapElement.classList.add('show');
            document.body.style.overflow = 'hidden';
        } else {
            this.overlapElement.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
    closeNav() {
        if (this.currentOpen) {
            this.currentOpen.classList.remove('open');
            this.currentOpen.previousElementSibling.classList.remove('active', 'rotate');
            this.currentOpen = null;
            if (!this.isMobile) {
                this.toggleOverlap(false);
            }
        }
    }
    toggleNavMobile() {
        if (this.navWrapper.classList.contains('openMav')) {
            this.navWrapper.classList.remove('openMav');
            this.mobileNavClose.classList.add('nav-hide');
            this.mobileNavOpen.classList.remove('nav-hide');
            this.mobileLogo.classList.remove('logo-show');
            this.toggleOverlap(false);
        } else {
            this.navWrapper.classList.add('openMav');
            this.mobileNavOpen.classList.add('nav-hide');
            this.mobileNavClose.classList.remove('nav-hide');
            this.mobileLogo.classList.add('logo-show');
            this.toggleOverlap(true);
        }
    }
    handleClickHeader = (e) => {
        e.preventDefault();
        this.isMobile = window.innerWidth <= 768;
        let { target } = e;
        if (target.classList.contains('active')) {
            this.closeNav();
        } else {
            if (this.currentOpen) {
                this.currentOpen.classList.remove('open');
                this.currentOpen.previousElementSibling.classList.remove('active', 'rotate');
            }
            let menu = target.parentElement.querySelector('ul');
            menu.classList.add('open');
            menu.previousElementSibling.classList.add('active', 'rotate');
            this.currentOpen = menu;
            if (!this.isMobile) {
                this.toggleOverlap(true);    
            }
        }
    }
    handleClickCloseNav = (e) => {
        if (this.isMobile) {
            this.toggleNavMobile();
        } else {
            this.closeNav();    
        }
    }
    handleResize = (e) => {
        this.isMobile = window.innerWidth <= 768;
    }
    handleClickToggleNavMobile = (e) => {
        this.toggleNavMobile();
    }
    getData = async () => {
        let { items } = await getData(API_URL);
        let nav = new Nav(items, this.navWrapper);
        document.querySelectorAll('.has-children').forEach(element => {
            element.addEventListener('click', (event) => this.handleClickHeader(event), false);
        });
        document.addEventListener('resize', (event) => this.handleResize(event), false);
        this.mobileNavOpen.addEventListener('click', (event) => this.handleClickToggleNavMobile(event), false);
        this.mobileNavClose.addEventListener('click', (event) => this.handleClickToggleNavMobile(event), false);
        this.overlapElement.addEventListener('click', (event) => this.handleClickCloseNav(event), false);
    }
}

new Main();
