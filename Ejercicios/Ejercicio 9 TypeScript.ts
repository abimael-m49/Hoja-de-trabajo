interface Usuario {
    nombre: string;
    edad: number;
    activo: boolean;
    correo?: string; 
}

interface InformacionLogIn {
    correo: string;
    clave: string;
    recaptcha: boolean;
}

const usuarioActual: Usuario = {
    nombre: "Juan Pérez",
    edad: 30,
    activo: true,
    correo: "juan.perez@example.com"
};

function loguear(info: InformacionLogIn): void {
    const correoValido = info.correo.includes('@') && info.correo.includes('.');
    const claveValida = info.clave.length >= 6;
    const recaptchaValido = info.recaptcha;
    
    if (correoValido && claveValida && recaptchaValido) {
        console.log('Acceso permitido');
    } else {
        console.log('Datos inválidos');
    }
}

const datosLogin: InformacionLogIn = {
    correo: 'correo@example.com',
    clave: '123456',
    recaptcha: true
};

loguear(datosLogin); 

const datosLoginInvalidos: InformacionLogIn = {
    correo: 'correo-sin-arroba',
    clave: '123',
    recaptcha: false
};

loguear(datosLoginInvalidos); 