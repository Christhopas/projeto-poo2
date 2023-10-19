export default class Estande{
    private numero_estande: number;

    constructor (numero: number){
        this.numero_estande = numero;
    }

     public getNumero(){
        return this.numero_estande;
    }

    public setNumero(numero: number){
        this.numero_estande = numero;
    }
}