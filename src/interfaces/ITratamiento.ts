export type tratamiento = "Desparasitante" | "Operación" | "Vacuna" | "Ninguno"

export interface ITratamiento{
    nombre:string,
    tipoTratamiento: tratamiento;
    // vacuna: string;
    // antiparasitario: string;
    fecha: Date;
    descripcion:string;
    idMascota?:number
}