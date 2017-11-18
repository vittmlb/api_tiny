"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unirest = require("unirest");
const parseStringSync = require('xml2js-parser').parseStringSync;
const stringifyObject = require('stringify-object');
let Console = require('console-ultimate');
let console;
console = new Console(process.stdout, process.stderr);
class ErroTiny {
    constructor(response) {
        this._status_processamento = [];
        this._status = [];
        this._codigo_erro = [];
        this._erros = [];
        let aux = parseStringSync(response);
        this.status_processamento = aux.retorno.status_processamento;
        this.status = aux.retorno.retornostatus;
        this.codigo_erro = aux.retorno.codigo_erro;
        this.erros = aux.retorno.erros;
    }
    set status_processamento(valor) {
        this._status_processamento = valor;
    }
    set status(valor) {
        this._status = valor;
    }
    set codigo_erro(valor) {
        this._codigo_erro = valor;
    }
    set erros(valor) {
        this._erros = valor;
    }
    print() {
        console.clear();
        console.error(`Status Processamento: ${this._status_processamento}`);
        console.error(`Status              : ${this._status}`);
        console.error(`Código do Erro      : ${this._codigo_erro}`);
        this.printErros();
    }
    printErros() {
        console.log(`Erros --------------------------`);
        this._erros.forEach(el => {
            console.error(el.erro);
        });
    }
}
class Chamada {
    constructor() { }
    call(url) {
        unirest.post(url).end((response) => {
            let erro = new ErroTiny(response.body);
            erro.print();
        });
    }
}
exports.Chamada = Chamada;
//# sourceMappingURL=app.js.map