import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha(123456)
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha(123456789);

const cliente = new Cliente("Lais", 78945612300, 456);

const diretorEstalogado = SistemaAutenticacao.login(diretor, 123456);
const gerenteEstalogado = SistemaAutenticacao.login(gerente, 123456789);
const clienteEstalogado = SistemaAutenticacao.login(cliente, 456);

console.log(diretorEstalogado, gerenteEstalogado, clienteEstalogado);