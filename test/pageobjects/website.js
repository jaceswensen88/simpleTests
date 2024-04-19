import { browser } from '@wdio/globals'

export default class BaseUrl {

    open () {
        return browser.url(`https://www.saucedemo.com/`);
    }
}
