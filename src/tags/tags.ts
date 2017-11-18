import { TinyApi, TinyTypes, Actions } from "../tinyApi/tinyApi";
import * as xml2js from 'xml2js';

export class Tags extends TinyApi {

    constructor(formato?: string) {
        super(TinyTypes.tags);
    }

    pesquisar(formato?: string) {
        let url = this.getBaseUrl(Actions.pesquisar);
        let pesquisa = 'Teste';
        return `${url}&${(formato || 'JSON')}`;
    }

}