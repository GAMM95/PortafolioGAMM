import Work1 from "../../assets/challenge-encriptador.png"
import Work2 from "../../assets/barberia-alura.png"
import Work3 from "../../assets/work3.png"
import installer1 from "../../assets/conversor.zip"
// import Work4 from "../../assets/work4.jpg"

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
  }
];

export const projectsNav = [
  {
    name: 'Todos',
  },
  {
    name: 'Web',
  },
  // {
  //   name: 'App',
  // },
  {
    name: 'Escritorio',
  },
]