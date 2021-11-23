import { IMascota } from "./IMascota";

type tipoUsuario = "CLIENTE" | "VETERINARIO";

export interface IUsuario {
    id?:number,
    usuario:string,
    nombre:string,
    apellidos:string,
    correo:string,
    contrasenia:string,
    direccion:string,
    tipo:tipoUsuario
    mascotas?:Array<number>
}