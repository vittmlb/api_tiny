"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let file = require('./data/urls.json');
let config = require('./config/config.json');
let token = config['token'];
// todo: Implantar mecanismo de erros.
// todo: Implementar as chamadas de api dentro das classes.
var Actions;
(function (Actions) {
    Actions["incluir"] = "incluir";
    Actions["pesquisar"] = "pesquisar";
})(Actions = exports.Actions || (exports.Actions = {}));
var TinyTypes;
(function (TinyTypes) {
    TinyTypes["pedidos"] = "pedidos";
    TinyTypes["contatos"] = "contatos";
    TinyTypes["tags"] = "tags";
})(TinyTypes = exports.TinyTypes || (exports.TinyTypes = {}));
class TinyApi {
    constructor(type, formato) {
        this._formato = '';
        this._url_list = '';
        this._url = '';
        this._action = '';
        this._type = '';
        this.type = type;
        this._setUrlList(type);
        formato ? this.formato = formato : '';
    }
    set type(value) {
        this._type = value;
    }
    get type() {
        return this._type;
    }
    set formato(value) {
        this._formato = value;
    }
    get formato() {
        return this._formato;
    }
    _setUrlList(type) {
        this._url_list = file[type];
    }
    getBaseUrl(action) {
        return `${this._url_list[(action)]}?token=${token}`;
    }
}
exports.TinyApi = TinyApi;
//# sourceMappingURL=tinyApi.js.map