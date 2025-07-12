<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En la ingeniería de software, la correcta identificación de requisitos es esencial para el éxito de cualquier sistema. Esta unidad se enfoca en la recolección, análisis y documentación de las necesidades de usuarios y stakeholders, utilizando técnicas sistemáticas que permiten definir claramente los requisitos funcionales y no funcionales desde las fases iniciales del proyecto. El objetivo es asegurar que el producto final cumpla con las expectativas planteadas, reduciendo riesgos y errores.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") El estudiante, al finalizar la unidad, será capaz de aplicar estrategias para identificar, interpretar y priorizar los requerimientos, estructurar entrevistas con actores clave y transformar las necesidades en requisitos claros. Esto fortalece habilidades claves para roles en análisis de sistemas, gestión de proyectos y desarrollo de software. Además, se analizan técnicas como observación directa, encuestas, talleres colaborativos y modelado de procesos, que permiten una comprensión profunda del entorno del usuario.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La unidad se organiza en tres temas principales: técnicas de levantamiento de requisitos, entrevistas con stakeholders y análisis de necesidades. Cada sección ofrece ejemplos prácticos, lecturas y actividades participativas. Se fomenta la reflexión y la aplicación en contextos reales, consolidando un aprendizaje activo y significativo, con la recomendación de tener conocimientos previos sobre el ciclo de vida del software para facilitar la comprensión de los contenidos.

</template>
