(() => {

    //* Apply the principle of single responsability
    //* Prioritize composition over inheritance

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }

    class InputEvents {

        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    class InputElement {

        public htmlElement: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.htmlElement = new HtmlElement(id, "input");
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    const nameField = new InputElement('Santiago', 'Enter first name', 'txtName');

    console.log({ nameField });

})()