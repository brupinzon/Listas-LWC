import { LightningElement } from 'lwc';
export default class App extends LightningElement {

pessoa = {
  nome: 'Bruna',
  telefone: '999999999',
  idade: 26,
  status: true
  };

lista = [
  {cod: 1, nome: 'Bruna', tipo: 'mulhersapiens', cor: 'rosa'},
  {cod: 2, nome: 'Alexa', tipo: 'bolinha', cor: 'branco'},
  {cod: 3, nome: 'Flor', tipo: 'rosa', cor: 'vermelha'},
  {cod: 4, nome: 'Água', tipo: 'com gás', cor: 'cinza'},
  {cod: 5, nome: 'Bolo', tipo: 'chocolate', cor: 'preto'},
  {cod: 6, nome: 'Maria', tipo: 'bolacha', cor: 'marrom'},
  ];
}
