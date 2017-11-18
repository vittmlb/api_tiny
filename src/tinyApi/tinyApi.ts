let file = require('./data/urls.json');
let config = require('./config/config.json');
let token = config['token'];

import * as fs from 'fs';

// todo: Implantar mecanismo de erros.
// todo: Implementar as chamadas de api dentro das classes.

export enum Actions {
    incluir = 'incluir',
    pesquisar = 'pesquisar'
}

export enum TinyTypes {
    pedidos = 'pedidos',
    contatos = 'contatos',
    tags = 'tags'
}


export class TinyApi {
    private _formato = '';
    private _url_list = '';
    private _url: string = '';
    private _action: string = '';
    private _type: string = '';

    constructor(type: TinyTypes, formato?: string) {
        this.type = type;
        this._setUrlList(type);
        formato ? this.formato = formato : '';
    }

    set type(value: string) {
        this._type = value;
    }
    get type(): string {
        return this._type;
    }

    set formato(value: string) {
        this._formato = value;
    }
    get formato(): string {
        return this._formato;
    }

    private _setUrlList(type: string) {
        this._url_list = file[type];
    }

    getBaseUrl(action: Actions): string {
        return `${this._url_list[(action)]}?token=${token}`;
    }


}