/** Ficha técnica del proyecto. */
const projectInfo = {
  name: 'Ventanilla Única de Trámites y Servicios - Produccion',
  fullname: 'Secretaría Distrital de Salud',
  description:
    'La Secretaría Distrital de Salud, en concordancia con la Política de Gobierno Digital, ha dispuesto para la ciudadanía, la ventanilla única de trámites en línea, con el fin de hacer más ágil y efectiva la interacción de nuestra institución con los ciudadanos. A través de esta ventanilla, cualquier ciudadano o institución podrá igualmente consultar la validez y veracidad de los actos administrativos que se generen por cada trámite, respaldando la gestión de la SDS bajo los principios de seguridad de la información.',
  version: 'v.1.0.0.',
  descriptionaditional:
    ' Tenga en cuenta, que para realizar nuestros trámites en línea, es obligatorio diligenciar previamente el REGISTRO DEL CIUDADANO (persona natural o jurídica), el cual servirá para la realización de trámites posteriores ante la Secretaría Distrital de Salud. Cualquier información adicional, consulta o dificultad frente a la realización de sus trámites en línea, podrá escribirnos al correo electrónico contactenos@saludcapital.gov.co.',
  versionYear: 2021,
  developTo: 'La Secretaria Distrital de Salud',
  recommendedBrowsers: 'Navegadores Web recomendados: Chrome 43 o superior, Firefox 38 o superior, Safari 8 o superior.',
  information:
    'Todos los derechos reservados. Ninguna reproducción externa copia o transmisión digital de esta publicación puede ser hecha sin permiso escrito. Ningún párrafo de esta publicación puede ser reproducido, copiado o transmitido digitalmente sin un consentimiento escrito o de acuerdo con las leyes que regulan los derechos de autor y con base en la regulación vigente.',
  menu: [
    {
      name: 'Licencias',
      children: [
        { name: 'Registro Natural', path: '/registro/Natural' },
        { name: 'Registro Juridico', path: '/registro/Juridico' },
        { name: 'Licencia Cremación - Individual', path: '/tramites-servicios/licencia/cremacion-individual' },
        { name: 'Licencia Cremación - Fetal', path: '/tramites-servicios/licencia/cremacion-fetal' },
        { name: 'Licencia Inhumación - Individual', path: '/tramites-servicios/licencia/inhumacion-individual' },
        { name: 'Licencia Inhumación - Fetal', path: '/tramites-servicios/licencia/inhumacion-fetal' },
        { name: 'Maestro', path: '/tramites-servicios' }
      ]
    }
  ]
};

/** Expresiones regulares. */
const regExp = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  url: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
  notSpecialCharacters: /^[A-Za-z0-9.,;:-áéíóúÁÉÍÓÚäëïöüÄËÏÖÜñÑ\s]+$/,
  notSpecialCharactersStrict: /^[A-Za-z0-9\s]+$/,
  notSpecialCharactersStrictAndSpaces: /^[A-Za-z0-9]+$/,
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).*$/
};

export { projectInfo, regExp };
export const direcionOrienta = [{ key: ' ' }, { key: 'ESTE' }, { key: 'SUR' }];

export const nomesclatura = [
  { key: 'AK- Avenida Carrera', value: 'AK - Avenida Carrera' },
  { key: 'AC- Avenida Calle', value: 'AC - Avenida Calle' },
  { key: 'CL- Calle', value: 'CL - Calle' },
  { key: 'DG- Diagonal', value: 'DG - Diagonal' },
  { key: 'KR- Carrera', value: 'KR - Carrera' },
  { key: 'TV- Transversal', value: 'TV - Transversal' }
];

export const letras = [
  { key: ' ' },
  { key: 'A' },
  { key: 'B' },
  { key: 'C' },
  { key: 'D' },
  { key: 'F' },
  { key: 'G' },
  { key: 'H' },
  { key: 'I' },
  { key: 'J' },
  { key: 'K' },
  { key: 'L' },
  { key: 'M' },
  { key: 'N' },
  { key: 'P' },
  { key: 'Q' },
  { key: 'R' },
  { key: 'T' },
  { key: 'U' },
  { key: 'V' },
  { key: 'W' },
  { key: 'X' },
  { key: 'Y' },
  { key: 'Z' }
];

export const EstadoCivil = [
  { key: '1', name: 'Soltero' },
  { key: '2', name: 'Casado' },
  { key: '3', name: 'Union marital de hecho' },
  { key: '4', name: 'Divorciado' },
  { key: '5', name: 'Viudo' }
];
