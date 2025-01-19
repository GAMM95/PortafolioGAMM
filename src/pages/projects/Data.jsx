import Work1 from "../../assets/challenge-encriptador.png"
import Work2 from "../../assets/barberia-alura.png"
import Work3 from "../../assets/work3.png"
import Work4 from "../../assets/work4.png"
import Work5 from "../../assets/work5.jpg"
import installer1 from "../../assets/conversor.zip"
import apk1 from "../../assets/PrediHipertension.apk"


export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: 'Encriptador de textos',
    technologies: 'HTML - CSS - JavaScript',
    category: 'Web',
    github: 'https://github.com/GAMM95/challengeONE_encriptador',
    demo: 'https://gamm95.github.io/challengeONE_encriptador/',
    description: 'Este Challenge consiste en crear una página web que pueda encriptar y desencriptar un texto ingresado por el usuario y mostrar dicho texto de forma encriptada o desencriptada. Challenge creado con los conocimientos adquiridos durante el curso de "Principiante En Programación".'
  },
  {
    id: 2,
    image: Work2,
    title: 'Barbería Alura',
    technologies: 'HTML - CSS - React',
    category: 'Web',
    github: 'https://github.com/GAMM95/barberia-alura',
    demo: 'https://gamm95.github.io/barberia-alura/',
    description: 'Este Challenge consiste en crear una página web estatica con el fin de ver la estructura html, agregar estilos css y fue tambien desarrollado con React.'
  },
  {
    id: 3,
    image: Work3,
    title: 'Conversor de unidades',
    technologies: 'Java',
    category: 'Escritorio',
    github: 'https://github.com/GAMM95/Conversor_Unidades',
    demo: installer1,
    description: 'Programa de escritorio que ha sido desarrollado utilizando Apache NetBeans 18 con Java Swing.  Esta aplicación permite a los usuarios convertir divisas y otras unidades, como temperatura, peso, longitud, superficie y volumen. Su funcionalidad es simple y efectiva: los usuarios ingresan un valor numérico y seleccionan la unidad base correspondiente. Luego, al elegir la unidad de cambio, el programa realiza automáticamente el cálculo y muestra el nuevo valor convertido.'
  },
  {
    id: 4,
    image: Work4,
    title: 'Consulta de Transportes',
    technologies: 'PHP - HTML - JavaScript - Tailwind - SQL Server',
    category: 'Web',
    github: 'https://github.com/GAMM95/consulta-transportes',
    demo: 'http://200.233.44.136/consulta_transporte/',
    description: 'Sistema web en línea de consultas de transportes para la Sub Gerencia de Transportes, Tránsito y Seguridad Vial de la Municipalidad Distrital de La Esperanza. Este sistema permite a los inspectores de tránsito hacer consultas de las tarjetas de circulación vigentes, papeletas impuestas sin pagar y paraderos establecidos correspondientes al vehiculo menor motorizado ingresando la placa. Para ingresar al sistema utilice las credenciales username: gamm y contraseña: 123456'
  },
  {
    id: 5,
    image: Work5,
    title: 'PrediHipertension',
    technologies: 'Flutter - Machine Learning - Firebase',
    category: 'App',
    github: 'https://github.com/GAMM95/PrediHipertension',
    demo: apk1,

    description: 'Aplicativo móvil basado en Machine Learning para la predicción del riesgo de desarrollar Hipertensión Arterial (HTA). Este aplicativo consta de un test de 15 preguntas de factores de riesgo directamente relacionados con la HTA.'
  }
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