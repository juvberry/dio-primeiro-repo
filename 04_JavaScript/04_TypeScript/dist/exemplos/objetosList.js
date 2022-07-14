"use strict";
const mariana = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
mariana.idade = 24;
const andre = {
    nome: 'André',
    idade: 21,
    profissao: 'artista'
};
const paula = {
    nome: 'Paula',
    idade: 21,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Atleta"] = 3] = "Atleta";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 27,
    profissao: Profissao.Atleta
};
const jessica = {
    nome: 'Jessica',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'Programação']
};
function listar(lista) {
    for (let item of lista) {
        console.log(' ', item);
    }
}
listar(jessica.materias);
