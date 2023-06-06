import { Controller } from '@hotwired/stimulus';
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

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
    static targets = ['input'];
    static values = {
        content: String,
    }

    connect() {
        this.editor = new Editor({
            element: this.inputTarget,

            content: this.contentValue,

            extensions: [
                StarterKit.configure({
                    heading: {
                        levels: [1, 2, 3],
                    },
                }),
            ],
        })
    }

    bold(e) {
        e.preventDefault()

        this.editor.chain().focus().toggleBold().run()
    }
}
