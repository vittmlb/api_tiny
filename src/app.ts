import * as unirest from 'unirest';
const parseStringSync = require('xml2js-parser').parseStringSync;

const stringifyObject = require('stringify-object');

let Console = require('console-ultimate');
let console;

console = new Console(process.stdout, process.stderr);

class ErroTiny {

    private _status_processamento = [];
    private _status = [];
    private _codigo_erro = [];
    private _erros = [];

    constructor(response) {
        let aux = parseStringSync(response);
        this.status_processamento = aux.retorno.status_processamento;
        this.status = aux.retorno.retornostatus;
        this.codigo_erro = aux.retorno.codigo_erro;
        this.erros = aux.retorno.erros;
    }

    private set status_processamento(valor) {
        this._status_processamento = valor;
    }
    private set status(valor) {
        this._status = valor;
    }
    private set codigo_erro(valor) {
        this._codigo_erro = valor;
    }
    private set erros(valor) {
        this._erros = valor;
    }

    print(): void {
        console.clear();
        console.error(`Status Processamento: ${this._status_processamento}`);
        console.error(`Status              : ${this._status}`);
        console.error(`Código do Erro      : ${this._codigo_erro}`);
        this.printErros();
    }

    printErros(): void {
        console.log(`Erros --------------------------`);
        this._erros.forEach(el => {
            console.error(el.erro);
        });
    }

}

export class Chamada {

    private _url: string;

    constructor() {}


    call(url) {
        unirest.post(url).end((response) => {
            let erro = new ErroTiny(response.body);
            erro.print();
        });
    }




}