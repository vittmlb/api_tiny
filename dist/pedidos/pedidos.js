"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tinyApi_1 = require("../tinyApi/tinyApi");
const xml2js = require("xml2js");
var FormPag;
(function (FormPag) {
    FormPag["dinheiro"] = "Dinheiro";
    FormPag["cartao_credito"] = "Cart\u00E3o de cr\u00E9dito";
    FormPag["cartao_debito"] = "Cart\u00E3o de d\u00E9bito";
    FormPag["cheque"] = "Cheque";
    FormPag["multiplas"] = "M\u00FAltiplas";
})(FormPag = exports.FormPag || (exports.FormPag = {}));
// todo: Adicionar Gateways, Categorias e Tags
class Pedidos extends tinyApi_1.TinyApi {
    constructor(formato) {
        super(tinyApi_1.TinyTypes.pedidos, formato);
        this._cliente = {};
        this._itens = {};
        this._parcelas = {};
        this._marcadores = {};
        this._nome_transportador = '';
        this._forma_pagamento = '';
        this._frete_por_conta = '';
        this._valor_frete = 0;
        this._valor_desconto = 0;
        this._numero_ordem_compra = '';
        this._numero_pedido_ecommerce = '';
        this._situacao = '';
        this._obs = '';
        this._forma_envio = '';
        this._forma_frete = '';
    }
    incluirPedido(xmlObj) {
        this.formato = 'XML';
        let url = this.getBaseUrl(tinyApi_1.Actions.incluir);
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
    _getPedidoJson() {
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
        };
    }
    get _pedidoXML() {
        return new xml2js.Builder().buildObject(this._getPedidoJson());
    }
}
exports.Pedidos = Pedidos;
//# sourceMappingURL=pedidos.js.map