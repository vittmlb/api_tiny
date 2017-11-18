"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tinyApi_1 = require("../tinyApi/tinyApi");
class Tags extends tinyApi_1.TinyApi {
    constructor(formato) {
        super(tinyApi_1.TinyTypes.tags);
    }
    pesquisar(formato) {
        let url = this.getBaseUrl(tinyApi_1.Actions.pesquisar);
        let pesquisa = 'Teste';
        return `${url}&${(formato || 'JSON')}`;
    }
}
exports.Tags = Tags;
//# sourceMappingURL=tags.js.map