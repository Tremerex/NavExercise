/*global browser*/

import Main from './main';

import { DELAY } from './common';

export class Nav extends Main {
    constructor() {
        super('/');
    }
    get navElements() {
        return browser.elements('.nav-wrapper > li');
    }
    get menuItemWithSubMenu() {
        return browser.element('.has-children');
    }
    get menuItemWithSubMenuActive() {
        return browser.element('.has-children.active');
    }
    get subMenuElement() {
        return browser.element('.sub-nav.open');
    }
    get overlapOpen() {
        return browser.element('.overlap.show');
    }
    get overlapHide() {
        return browser.element('.overlap:not(.show)');
    }
    checkMenuItems() {
        var elements = this.navElements;
        browser.waitUntil(() => elements.isExisting());
        return elements.value.length;
    }
    clickMenuItemWithSubMenu() {
        var element = this.menuItemWithSubMenu;
        element.click();
        var elementActive = this.menuItemWithSubMenuActive;
        browser.waitUntil(() => elementActive.isExisting());
        return elementActive.isExisting();
    }
    checkIfSubMenuIsOpen() {
        var element = this.subMenuElement;
        browser.waitUntil(() => element.isExisting());
        return element.isExisting();
    }
    checkIfOverlapIsShow() {
        var element = this.overlapOpen;
        browser.waitUntil(() => element.isExisting());
        return element.isExisting();
    }
    clickOverLap() {
        var element = this.overlapOpen;
        element.click();
        var elementHide = this.overlapHide;
        return elementHide.isExisting();
    }
    checkIfOverlapIsHide() {
        var element = this.overlapHide;
        browser.waitUntil(() => element.isExisting());
        return element.isExisting();
    }
    checkIfOverlapIsHide() {
        var element = this.overlapHide;
        browser.waitUntil(() => element.isExisting());
        return element.isExisting();
    }
    checkIfSubmenuIsClose() {
        var element = this.menuItemWithSubMenuActive;
        return element.value === null;
    }
} 