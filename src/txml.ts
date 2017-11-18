import { Chamada } from "./app";
import { Pedidos } from "./pedidos/pedidos";
import * as unirest from 'unirest';
import { Tags } from "./tags/tags";

const parseStringSync = require('xml2js-parser').parseStringSync;

let p = new Pedidos();
p.data_pedido = '18/11/2017';
p.data_prevista = '18/11/2017';
p.cliente = {nome: 'Tarde'};
p.itens = {
    item: {
        codigo: 1234,
        descricao: 'Produto Teste',
        unidade: "UN",
        quantidade: 2,
        valor_unitario: 155.20
    }
};
p.parcelas = {
    parcela: {
        dias: 30,
        data: "18/11/2017",
        valor: '160'
    }
};
p.marcadores = {
    marcador: {
        descricao: 'Tarde'
    }
};
p.nome_transportador = 'A';
p.forma_pagamento = 'A';
p.frete_por_conta = 'A';
p.valor_frete = 0;
p.numero_ordem_compra = '0';

// console.log(p._pedidoXML);

// let b = p.incluirPedido();

let tag = new Tags();
let b = tag.pesquisar('XML');

let chamada = new Chamada();
chamada.call(b);