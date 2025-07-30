/**
 * Mini-Projeto: Sistema de Entrada em Eventos
 *
 * Este script simula um sistema de validação de entrada em um evento,
 * verificando diversas condições para permitir ou negar o acesso.
 */

// --- Dados simulados (como se viessem de um formuário) ---
let idade = 19;
let temIngresso = false ;
let nome = "Bruna";
let listaVIP = ["joão", "bruna", "maria"];
let estaLogado = true;
let confirmouPresenca = true;

//Verifica se o nome está na lista VIP (ignorando maiúsculas/minúsculas)
//Criar uma variável chamada "nomeNaLista" para guardar o resultado de uma verificação

let nomeNaLista = listaVIP.includes(nome.toLowerCase());

/** 
 * Lógica principal de validação de entrada.
 * O participante precisa atender a TODOS os seguintes critérios:
 * 1. Ser maior de 18 anos.
 * 2. Ter ingresso OU estar na lista VIP.
 * 3. Estar logado no sistema.
 * 4. Ter confirmado presença.
 */

// ---- Condições em várias linhas, entre parenteses ---- 
if(
   idade >= 18 &&                   // Critério 1: Idade mínima
   (temIngresso || nomeNaLista) && //Critério 2: Ingresso ou VIP
   estaLogado &&                   // Critério 3: Usuário logado
   confirmouPresenca               // Critério 4: Presença confirmada
) {
   console.log("Entrada liberada. Bem-vindo(a) ao evento!"); // Se a condição for verdadeira
} else {
   console.log("Acesso negado.");                           // Se a condição for falsa
}

