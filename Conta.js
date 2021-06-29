//Classe Abstrata
export class Conta{

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            console.log("Calma lá meu patrão");
            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }
 
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            } 
        
        }
    depositar(valor){
        if(valor <= 0) return;
            
        this._saldo += valor;    
        }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        }
}