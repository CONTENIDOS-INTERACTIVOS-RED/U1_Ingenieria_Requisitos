export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Identificación de requisitos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de levantamiento de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Observación directa del usuario final',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Revisión de documentación existente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de prototipado',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entrevistas con <em>stakeholders</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificación y clasificación de <em>stakeholders</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de formulación de preguntas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Validación de la información recolectada',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis de requisitos funcionales y no funcionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto y clasificación de los requisitos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Requisitos funcionales: definición y ejemplos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Requisitos no funcionales: definición y ejemplos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Documentación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Importancia de la documentación de requisitos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Estructura de un documento de requisitos de software (SRS)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Lenguaje y estilo en la documentación de requisitos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Herramientas para la documentación de requisitos',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Plantillas y estándares para documentación',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo:
              'Mantenimiento y gestión de cambios en los documentos de requisitos',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Métodos de validación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Concepto y objetivos de la validación de requisitos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Técnicas formales e informales de validación',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Revisión con el cliente como técnica de validación',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Prototipado y simulación para validar requisitos',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Revisión con el cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Importancia de la revisión con el cliente',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Tipos de revisión con el cliente',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Roles y responsabilidades en la revisión',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Herramientas y buenas prácticas',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gil Pascual, J. A. (2016). Técnicas e instrumentos para la recogida de información. UNED - Universidad Nacional de Educación a Distancia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48876',
    },
    {
      referencia:
        'Fresno Chávez, C. (2018). ¿Cómo gestionar la información científico-técnica? Ciudad Educativa. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36730 ',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2021). Ingeniería de software: Un enfoque práctico (9.ª ed.). McGraw-Hill Education.  ',
      link: 'http://artemisa.unicauca.edu.co/~cardila/IS__Libro_Pressman_7.pdf',
    },
    {
      referencia:
        'Sommerville, I. (2016). Ingeniería de software (10.ª ed.). Pearson Educación. ',
      link:
        'https://dn790001.ca.archive.org/0/items/bme-vik-konyvek/Software%20Engineering%20-%20Ian%20Sommerville.pdf',
    },
    {
      referencia:
        'Echeverri, J. Aristizábal, M. & González, L. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de software. Corporación Universitaria Remington.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/68913',
    },
    {
      referencia:
        'Universidad Politécnica Salesiana. (2021). Priorización de requisitos para una adecuada calidad de software.  ',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/20957/1/UPS-GT003395.pdf',
    },
    {
      referencia:
        'Zapata Jaramillo, C. M. (2006). Alineación entre metas organizacionales y elicitación de requisitos del software. Red Dyna.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/304',
    },
    {
      referencia:
        'Genero Bocco, M., Cruz Lemus, J. A. & Piattini Velthuis, M. G. (2014). Métodos de investigación en ingeniería del software. RA-MA Editorial.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106450',
    },
  ],
  glosario: [
    {
      termino: 'Deseo',
      significado:
        'característica adicional que mejora la experiencia del usuario, pero cuya ausencia no impide el funcionamiento del sistema.',
    },
    {
      termino: 'Encuesta',
      significado:
        'instrumento estandarizado de recolección de datos que permite obtener información de múltiples usuarios de forma estructurada y cuantificable.',
    },
    {
      termino: 'Entrevista estructurada',
      significado:
        'técnica de recolección de información en la que se usan preguntas predefinidas y en un orden fijo, facilitando el análisis comparativo.',
    },
    {
      termino: 'Entrevista semi-estructurada',
      significado:
        'método de entrevista con preguntas guía que permiten flexibilidad para profundizar, según las respuestas del entrevistado.',
    },
    {
      termino: 'Historia de usuario (<em>User Story</em>)',
      significado:
        'descripción breve y simple de una funcionalidad deseada escrita desde la perspectiva del usuario: "Como [rol], quiero [funcionalidad] para [beneficio]".',
    },
    {
      termino: 'MoSCoW',
      significado:
        'técnica de priorización que clasifica los requisitos en cuatro categorías: <em>Must have</em> (imprescindibles), <em>Should have</em> (importantes), <em>Could have</em> (deseables), <em>Won’t have</em> (no necesarios por ahora).',
    },
    {
      termino: 'Necesidad',
      significado:
        'condición esencial para resolver un problema o alcanzar un objetivo. Se diferencia del deseo, que es una preferencia sin obligatoriedad.',
    },
    {
      termino: 'Observación directa',
      significado:
        'técnica de levantamiento de requisitos que consiste en observar al usuario en su entorno real para identificar tareas, problemas y comportamientos.',
    },
    {
      termino: 'Prototipo',
      significado:
        'representación preliminar de un sistema o producto, que permite validar y refinar los requisitos con los usuarios antes de la construcción final.',
    },
    {
      termino: 'Requisito',
      significado:
        'condición o capacidad necesaria que debe tener un sistema para satisfacer las necesidades del usuario o alcanzar objetivos específicos.',
    },
    {
      termino: 'Requisito inicial',
      significado:
        'formulación preliminar de un requerimiento basado en la información recolectada, aún sujeta a validación y refinamiento.',
    },
    {
      termino: 'Stakeholder',
      significado:
        'persona o grupo que tiene interés o se ve afectado por un sistema, producto o proyecto. Incluye usuarios finales, clientes, desarrolladores, patrocinadores, entre otros.',
    },
    {
      termino: '<em>Story Mapping</em>',
      significado:
        'Técnica visual que organiza historias de usuario en un mapa para mostrar la relación entre tareas y valor entregado al usuario.',
    },
    {
      termino: 'Validación de requisitos',
      significado:
        'Proceso mediante el cual se confirma que los requisitos documentados reflejan correctamente las necesidades del cliente y son técnicamente viables.',
    },
    {
      termino: '<em>Workshop</em>',
      significado:
        'Taller participativo en el que diversos <em>stakeholders</em> colaboran para identificar, discutir y priorizar requisitos del sistema.',
    },
  ],
}
