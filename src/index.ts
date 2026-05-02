import { Cliente } from "./cliente";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";
import { SistemaPix } from "./sistemaPix"; // Importando o seu SistemaPix

const Maria = new Cliente(
    "123.456.789-00",
    "Maria Silva",
    new Date("1990-05-15"),
    "maria.silva@email.com", 
    "senha123");

const contaCorrente = new ContaCorrente("0001", 1000, 500);
const contaPoupanca = new ContaPoupanca("0002", 5000, 2.5);

Maria.adicionarConta(contaCorrente);
Maria.adicionarConta(contaPoupanca);

contaCorrente.depositar(500);
contaCorrente.sacar(200);



SistemaPix.cadastrarChave("maria@email.com", contaPoupanca);

const destino = SistemaPix.buscarConta("maria@email.com");

if (destino) {
    contaCorrente.transferir(300, destino);
    console.log("Transferência via PIX realizada com sucesso!");
} else {
    console.log("Chave PIX não encontrada.");
}

contaPoupanca.renderJuros(); 

console.log(`Saldo da conta corrente: R$${contaCorrente.saldo}`);
console.log(`Saldo da conta poupança: R$${contaPoupanca.saldo}`);

const clienteSerializado = JSON.stringify(Maria, null, 2);
console.log(clienteSerializado);