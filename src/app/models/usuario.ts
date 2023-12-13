export interface Usuario { //se exporta la interfaz de usuario para hacer uso de ella 
    uid: string | any; // id para autentificación de Firebase
    nombre: string; // -> nombre
    email: string; // -> email
    rol: string; // -> roles
    contrasena: string;
}