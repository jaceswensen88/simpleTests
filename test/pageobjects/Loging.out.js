import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Login from './Loging.in.js';
import BaseUrl from './website.js';

class Logout extends BaseUrl {

    get burgerMenu () {
        return $('[id="react-burger-menu-btn"]');
    }
    
    get logoutBtn (){
        return $('[data-test="logout-sidebar-link"]');
    } 
    
    
    async logOutTask () {
            await expect(this.burgerMenu).toBeExisting();
            await this.burgerMenu.click();
            await this.burgerMenu.moveTo();
            await expect(this.logoutBtn).toBeExisting();
            await this.logoutBtn.click();
            await expect(Login.submitBtn).toBeExisting();
        }
}

export default new Logout();