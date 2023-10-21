export default class Estande{
    private numero_estande: number;

    constructor (numero: number){
        this.numero_estande = numero;
    }

    public inserirNumero(numero_estande: number){
        this.numero_estande = numero_estande;
    }

    public retornarNumero(){
        return this.numero_estande;
    }
    
}