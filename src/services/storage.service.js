export const Storage = {
    prefix: 'react_redux_auth_app_',

    getKey: function (key) {
        return `${this.prefix}${key}`
    },

    set: function (key, value) {
        localStorage.setItem(this.getKey(key), value)
    },

    get: function (key) {
        const value = localStorage.getItem(this.getKey(key))
        return value ? value : null
    },

    setJson: function (key, value) {
        localStorage.setItem(this.getKey(key), JSON.stringify(value))
    },

    getJson: function (key) {
        const data = this.get(key)
        return data ? JSON.parse(data) : {}
    }
}