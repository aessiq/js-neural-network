class Controls {
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.left = false;
        this.right = false;
        this.addKeyboardListeners();
    }

    keyToProp = {
        w: 'forward',
        s: 'reverse',
        a: 'left',
        d: 'right',
    }

    addKeyboardListeners = () => {
        document.onkeydown = (event) => {
            if (this.keyToProp[event.key]) {
                this[this.keyToProp[event.key]] = true;
            }
        }

        document.onkeyup = (event) => {
            if (this.keyToProp[event.key]) {
                this[this.keyToProp[event.key]] = false;
            }
        }
    }
}