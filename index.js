class Cliente{
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            }
        }
    }
    

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;
console.log(ContaCorrenteRicardo.saldo);
ContaCorrenteRicardo.saldo = 100;
ContaCorrenteRicardo.sacar(50);



console.log(ContaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);
