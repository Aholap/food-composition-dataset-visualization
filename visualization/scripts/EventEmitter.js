export default class EventEmitter {
    #listeners = {};
    emit(eventName, data) {
        for (let listener of this.#listeners[eventName]) {
            listener.apply(this, [this, ...data]);
        }
    }
    on(name, listener) {
        if (!this.#listeners[name]) {
            this.#listeners[name] = [];
        }
        this.#listeners[name].push(listener);
    }
}