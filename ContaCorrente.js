import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

    static numeroContasCorrente = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroContas++;
    }

    sacar(valor){
        let taxa = 1.1  
        if(this._saldo >= valor ){
            this._saldo -= valor * taxa;
            return valor;
            }     
        }   
    }