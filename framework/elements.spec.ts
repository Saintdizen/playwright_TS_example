export {Page} from '@playwright/test';
import {BaseElement} from "./base/baseElement.spec";

export class Element extends BaseElement {
    constructor(readonly xpath: string) {
        super(xpath)
    }
}

export class Link extends BaseElement {
    constructor(readonly text: string) {
        super(`//a[text()='${text}'] | //a[@aria-label='${text}'] | //a[@id='${text}']`)
    }
}

export class Button extends BaseElement {
    constructor(readonly text: string) {
        super(`//button[text()='${text}'] | //button[@aria-label='${text}'] | //button[@id='${text}']`)
    }
}