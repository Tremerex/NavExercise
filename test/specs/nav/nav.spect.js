import { should } from 'chai';
import { Nav } from '../../components';
var nav = null;

describe('Nav Component', () => {
    before(() => {
        nav = new Nav();
        should();
    });
    describe('Test for the main Nav component', () => {
        it('Should show the Menu items', () => {
            var result = nav.checkMenuItems() > 0;
            result.should.be.true;
        });
        it('Should click the first element in the menu that has a submenu', () => {
            var result = nav.clickMenuItemWithSubMenu();
            result.should.be.true;
        });
        it('Should check if the submenu is open', () => {
            var result = nav.checkIfSubMenuIsOpen();
            result.should.be.true;
        });
        it('Should check if overlap is showing', () => {
            var result = nav.checkIfOverlapIsShow();
            result.should.be.true;
        });
        it('Should click on the overlap', () => {
            var result = nav.clickOverLap();
            result.should.be.true;
        });
        it('Should check if overlap is hidden', () => {
            var result = nav.checkIfOverlapIsHide();
            result.should.be.true;
        });
        it('Should check if submenu is closed', () => {
            var result = nav.checkIfSubmenuIsClose();
            result.should.be.true;
        });
    });
});
