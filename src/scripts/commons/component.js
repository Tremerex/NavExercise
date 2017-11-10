export default class Component {
    constructor() {
        this._state = {};
    }
    set state(nextState) {
        var isEquals = JSON.stringify(nextState) === JSON.stringify(this._state);
        this._state = nextState;
        if (!isEquals) {
            this.render();
        }
    }
    get state() {
        return this._state;
    }
    setState(obj) {
        if (typeof obj === 'object') {
            this.state = {...this.state, ...obj};
        }
    }
    render() {
        throw 'must to implement';
    }
}