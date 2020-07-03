export class Modal {
    constructor(contentId, fallaBackText){
        this.fallaBackText = fallaBackText;
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template');
    }

    show() {
        if ('content' in document.createElement('template')){
            const modalElements = document.importNode(this.modalTemplateEl.content, true);
            this.modal = modalElements.querySelector('.modal');
            this.backdrop = modalElements.querySelector('.backdrop');

            const contentElement = document.importNode(this.contentTemplateEl.content, true);
            this.modal.appendChild(contentElement);

            document.body.insertAdjacentElement('afterbegin',  this.modal);
            document.body.insertAdjacentElement('afterbegin',  this.backdrop);
        }else{
            alert(this.fallaBackText);
        }
    }

    hide() {
        this.modal.remove();
        this.backdrop.remove();

        this.modal = null;
        this.backdrop = null;
    }
}