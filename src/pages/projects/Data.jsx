import encriptador from "../../assets/screenshots/challenge-encriptador.png"
import barberia from "../../assets/screenshots/barberia-alura.png"
import conversor from "../../assets/screenshots/conversor.png"
import transportes from "../../assets/screenshots/transportes.png"
import predihipertension from "../../assets/screenshots/predihipertension.png"
import incidencias from "../../assets/screenshots/incidencias.png"
import installer1 from "../../assets/installers/conversor.zip"
import apk1 from "../../assets/installers/PrediHipertension.apk"


export const projectsData = [
  {
    id: 1,
    image: incidencias,
    title: 'Sistema de Gestión de Incidencias',
    technologies: 'PHP 7.4.8 - JavaScript - Tailwind CSS - SQL Server 2008 R2',
    category: 'Web',
    github: 'https://github.com/GAMM95/incidenciasMDE',
    demo: 'http://200.233.44.136/incidencias/',
    description: 'Sistema web en línea de gestión de incidencias para la Municipalidad Distrital de La Esperanza. Este sistema permite a los usuarios registrar, consultar, mostrar reportes de las incidencias ocurridas en cada área de la entidad descentralizando el proceso de gestión de incidencias Para ingresar al sistema utilice las credenciales username: admin y contraseña: admin123'
  },
  {
    id: 2,
    image: predihipertension,
    title: 'PrediHipertension',
    technologies: 'Flutter - Machine Learning - Firebase',
    category: 'App',
    github: 'https://github.com/GAMM95/PrediHipertension',
    demo: apk1,
    description: 'Aplicativo móvil basado en Machine Learning para la predicción del riesgo de desarrollar Hipertensión Arterial (HTA). Este aplicativo consta de un test de 15 preguntas de factores de riesgo directamente relacionados con la HTA.'
  },
  {
    id: 3,
    image: transportes,
    title: 'Consulta de Transportes',
    technologies: 'PHP - HTML - JavaScript - Tailwind - SQL Server',
    category: 'Web',
    github: 'https://github.com/GAMM95/consulta-transportes',
    demo: 'http://200.233.44.136/consulta_transporte/',
    description: 'Sistema web en línea de consultas de transportes para la Sub Gerencia de Transportes, Tránsito y Seguridad Vial de la Municipalidad Distrital de La Esperanza. Este sistema permite a los inspectores de tránsito hacer consultas de las tarjetas de circulación vigentes, papeletas impuestas sin pagar y paraderos establecidos correspondientes al vehiculo menor motorizado ingresando la placa. Para ingresar al sistema utilice las credenciales username: gamm y contraseña: 123456'
  },
  {
    id: 4,
    image: barberia,
    title: 'Barbería Alura',
    technologies: 'HTML - CSS - React',
    category: 'Web',
    github: 'https://github.com/GAMM95/barberia-alura',
    demo: 'https://gamm95.github.io/barberia-alura/',
    description: 'Este Challenge consiste en crear una página web estatica con el fin de ver la estructura html, agregar estilos css y fue tambien desarrollado con React.'
  },
  {
    id: 5,
    image: encriptador,
    title: 'Encriptador de textos',
    technologies: 'HTML - CSS - JavaScript',
    category: 'Web',
    github: 'https://github.com/GAMM95/challengeONE_encriptador',
    demo: 'https://gamm95.github.io/challengeONE_encriptador/',
    description: 'Este Challenge consiste en crear una página web que pueda encriptar y desencriptar un texto ingresado por el usuario y mostrar dicho texto de forma encriptada o desencriptada. Challenge creado con los conocimientos adquiridos durante el curso de "Principiante En Programación".'
  },
  {
    id: 6,
    image: conversor,
    title: 'Conversor de unidades',
    technologies: 'Java',
    category: 'Escritorio',
    github: 'https://github.com/GAMM95/Conversor_Unidades',
    demo: installer1,
    description: 'Programa de escritorio que ha sido desarrollado utilizando Apache NetBeans 18 con Java Swing.  Esta aplicación permite a los usuarios convertir divisas y otras unidades, como temperatura, peso, longitud, superficie y volumen. Su funcionalidad es simple y efectiva: los usuarios ingresan un valor numérico y seleccionan la unidad base correspondiente. Luego, al elegir la unidad de cambio, el programa realiza automáticamente el cálculo y muestra el nuevo valor convertido.'
  },


];

export const projectsNav = [
  {
    name: 'Todos',
  },
  {
    name: 'Web',
  },
  {
    name: 'App',
  },
  {
    name: 'Escritorio',
  },
]