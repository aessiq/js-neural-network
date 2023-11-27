class Controls {
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.left = false;
        this.right = false;
        this.addKeyboardListeners();
    }

    keyToDirection = {
        w: 'forward',
        s: 'reverse',
        a: 'left',
        d: 'right',
    }

    addKeyboardListeners = () => {
        document.onkeydown = (event) => {
            if (this.keyToDirection[event.key]) {
                this[this.keyToDirection[event.key]] = true;
            }
        }

        document.onkeyup = (event) => {
            if (this.keyToDirection[event.key]) {
                this[this.keyToDirection[event.key]] = false;
            }
        }
    }
}