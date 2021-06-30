export class SistemaAutenticacao{
    static login(funcionario, senha){
       if(funcionario.senha != senha){
           return false;
       }else{
           return true;
       }
    }
}