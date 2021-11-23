import { IMascota } from "./IMascota";

type tipoUsuario = "CLIENTE" | "VETERINARIO";

export interface IUsuario {
    usuario:string,
    nombre:string,
    apellidos:string,
    correo:string,
    contrasenia:string,
    direccion:string,
    tipo:tipoUsuario
    mascotas:Array<IMascota>
}