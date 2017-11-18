import { TinyApi, TinyTypes, Actions } from "../tinyApi/tinyApi";
import * as xml2js from 'xml2js';

export enum FormPag {
    dinheiro = 'Dinheiro',
    cartao_credito = 'Cartão de crédito',
    cartao_debito = 'Cartão de débito',
    cheque = 'Cheque',
    multiplas = 'Múltiplas'
}

// todo: Adicionar Gateways, Categorias e Tags

export class Pedidos extends TinyApi {

    private _data_pedido: string;
    private _data_prevista: string;

    private _cliente: any = {};
    private _itens: any = {};
    private _parcelas: any = {};

    private _marcadores = {};
    private _nome_transportador: string = '';
    private _forma_pagamento: string = '';
    private _frete_por_conta: string = '';
    private _valor_frete: number = 0;
    private _valor_desconto: number = 0;
    private _numero_ordem_compra: string = '';
    private _numero_pedido_ecommerce: string = '';
    private _situacao: string = '';
    private _obs: string = '';
    private _forma_envio: string = '';
    private _forma_frete: string = '';

    constructor(formato?: string) {
        super(TinyTypes.pedidos, formato)
    }

    incluirPedido(xmlObj?) {
        this.formato = 'XML';
        let url = this.getBaseUrl(Actions.incluir);
        let content = encodeURI(xmlObj || this._pedidoXML);
        return `${url}&pedido=${content}&formato=${this.formato}`;
    }

    set data_pedido(data) {
        this._data_pedido = data;
    }
    get data_pedido() {
        return this._data_pedido;
    }

    set data_prevista(data) {
        this._data_prevista = data;
    }
    get data_prevista() {
        return this._data_prevista;
    }

    set cliente(cliente) {
        this._cliente = cliente;
    }
    get cliente() {
        return this._cliente;
    }

    set itens(itens) {
        this._itens = itens;
    }
    get itens() {
        return this._itens;
    }

    set parcelas(parcelas) {
        this._parcelas = parcelas;
    }
    get parcelas() {
        return this._parcelas;
    }

    set marcadores(marcadores) {
        this._marcadores = marcadores;
    }
    get marcadores() {
        return this._marcadores;
    }

    set nome_transportador(nome_transportador) {
        this._nome_transportador = nome_transportador;
    }
    get nome_transportador() {
        return this._nome_transportador;
    }

    set forma_pagamento(forma_pagamento) {
        this._forma_pagamento = forma_pagamento;
    }
    get forma_pagamento() {
        return this._forma_pagamento;
    }

    set frete_por_conta(frete_por_conta) {
        this._frete_por_conta = frete_por_conta;
    }
    get frete_por_conta() {
        return this._frete_por_conta;
    }

    set valor_frete(valor_frete) {
        this._valor_frete = valor_frete;
    }
    get valor_frete() {
        return this._valor_frete;
    }

    set valor_desconto(valor_desconto) {
        this._valor_desconto = valor_desconto;
    }
    get valor_desconto() {
        return this._valor_desconto;
    }

    set numero_ordem_compra(valor) {
        this._numero_ordem_compra = valor;
    }
    get numero_ordem_compra() {
        return this._numero_ordem_compra;
    }

    set numero_pedido_ecommerce(valor) {
        this._numero_pedido_ecommerce = valor;
    }
    get numero_pedido_ecommerce() {
        return this._numero_pedido_ecommerce;
    }

    set situacao(valor) {
        this._situacao = valor;
    }
    get situacao() {
        return this._situacao;
    }

    set obs(valor) {
        this._obs = valor;
    }
    get obs() {
        return this._obs;
    }

    set forma_envio(valor) {
        this._forma_envio = valor;
    }
    get forma_envio() {
        return this._forma_envio;
    }

    set forma_frete(valor) {
        this._forma_frete = valor;
    }
    get forma_frete() {
        return this._forma_frete;
    }

    private _getPedidoJson() {
        return {
            "pedido": {
                "data_pedido": this.data_pedido,
                "data_prevista": this.data_prevista,
                "cliente": this.cliente,
                "itens": this.itens,
                "parcelas": this.parcelas,
                "marcadores": this.marcadores,
                "nome_transportador": this.nome_transportador,
                "forma_pagamento": this.forma_pagamento,
                "frete_por_conta": this.frete_por_conta,
                "valor_frete": this.valor_frete,
                "valor_desconto": this.valor_desconto,
                "numero_ordem_compra": this.numero_ordem_compra,
                "numero_pedido_ecommerce": this.numero_pedido_ecommerce,
                "situacao": this.situacao,
                "obs": this.obs,
                "forma_envio": this.forma_envio,
                "forma_frete": this.forma_frete
            }
        }
    }

    get _pedidoXML() {
        return new xml2js.Builder().buildObject(this._getPedidoJson());
    }
}