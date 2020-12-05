namespace SP{
 
    export class Cliente implements iPersona{
        id:number;
        nombre:string;
        apellido:string;
        edad:number;
        sexo:number;
        
        constructor(id?: number, nombre?: string, apellido?: string, edad?: number, sexo?:number){
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.sexo = sexo;
        }
    }
}