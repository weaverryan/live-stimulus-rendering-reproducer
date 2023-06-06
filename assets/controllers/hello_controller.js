import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    static targets = ['stuffHolder'];

    connect() {
        const divElement = document.createElement('div');
        divElement.innerText = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
        this.element.prepend(divElement);
    }

    addStuff() {
        const divElement = document.createElement('div');
        divElement.innerText = 'More stuff!';
        this.stuffHolderTarget.appendChild(divElement);
    }
}
