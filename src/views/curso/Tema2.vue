<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Entrevistas con <em>stakeholders</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        .bg-color-2.p-5.bordes-1(data-aos="fade-left")
          p.mb-0 En el desarrollo de proyectos, comprender a los <em>stakeholders</em> y formular entrevistas efectivas, es clave para recoger información relevante y precisa. Este tema explora cómo identificar, clasificar y validar a los actores involucrados, así como las técnicas para formular preguntas que permitan recolectar requisitos claros y alineados con los objetivos del proyecto.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Identificación y clasificación de <em>stakeholders</em>
    
    p.mb-5 En cualquier proyecto, ya sea de desarrollo de <em>software</em>, investigación, o implementación de sistemas, identificar y clasificar a los <em>stakeholders</em> (interesados) es una de las primeras actividades fundamentales para comprender el contexto y asegurar el éxito del proyecto. Los <em>stakeholders</em> son aquellos individuos, grupos u organizaciones que tienen un interés en el proyecto, ya sea de manera directa o indirecta, o que pueden influir en su éxito o fracaso. Desde los usuarios finales hasta los reguladores, cada stakeholder desempeña un papel único en el proceso, y conocerlos a fondo ayudará a tomar decisiones informadas durante todas las fases del proyecto.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-5(data-aos="fade-left")
          h5 ¿Qué son los <em>stakeholders</em>?
          p.mb-0 Los <em>stakeholders</em> son actores claves cuya influencia sobre el proyecto puede ser significativa. Estos pueden ser tanto internos como externos a la organización que lidera el proyecto. Los internos incluyen, por ejemplo, a los empleados, equipos de trabajo y directivos de la empresa, mientras que los externos abarcan a clientes, proveedores, reguladores, competidores, comunidades y hasta personas no involucradas directamente que, sin embargo, se verán afectadas por los resultados del proyecto.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La identificación de los <em>stakeholders</em> debe hacerse lo más temprano posible, porque sus opiniones, deseos y necesidades influirán directamente en la forma en que el proyecto se desarrolla, se implementa y se evalúa. Este proceso también permite prever posibles riesgos, conflictos de intereses o incluso oportunidades que podrían no haber sido consideradas inicialmente.
    
    
    h2(data-aos="fade-left") ¿Por qué es importante identificar y clasificar a los <em>stakeholders</em>?
    p.mb-5 La identificación y clasificación de <em>stakeholders</em>, es un paso crítico en la gestión de proyectos, debido a que permite al equipo de desarrollo gestionar recursos, comunicación y riesgos de forma eficaz. Al reconocer quiénes son los actores claves, se pueden:

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-bold.text-center Priorizar intereses y expectativas.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-bold.text-center Evitar omisiones importantes.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-bold.text-center Reducir resistencias al cambio.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-bold.text-center Mejorar la toma de decisiones.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p.mb-0 <b>Ejemplo</b>. En un proyecto para una nueva plataforma digital de gestión de inventarios, ignorar al personal de ventas como stakeholder clave, puede llevar a no considerar su necesidad de acceder rápidamente al inventario. Esta omisión podría afectar la efectividad del sistema y generar retrasos.
    
    h2(data-aos="fade-left") Proceso de identificación de <em>stakeholders</em>
    p.mb-5 Este proceso requiere un enfoque sistemático y proactivo, que puede incluir varias estrategias complementarias:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Revisión de documentación interna
              p Permite detectar áreas que suelen verse afectadas. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p <b>Ejemplo</b>. Al revisar interacciones previas, se descubre que atención al cliente necesita acceso directo a ciertos datos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Entrevistas informales y lluvia de ideas
              p Conversaciones abiertas revelan nuevos actores claves. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p <b>Ejemplo</b>. El equipo de marketing es identificado como relevante para el lanzamiento de una app móvil.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Análisis de usuarios finales
              p Considera usuarios directos e indirectos.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p <b>Ejemplo</b>. En una app de salud, los pacientes son usuarios, pero los médicos y autoridades sanitarias también son <em>stakeholders</em>.
    
    h2(data-aos="fade-left") Clasificación de los <em>stakeholders</em>
    p.mb-5 Una vez identificados, los <em>stakeholders</em> deben ser clasificados para establecer un plan de acción y comunicación adecuado. Las formas más comunes de clasificación son:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Nivel de influencia / poder")
            p Indica la capacidad de incidir en decisiones claves.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>. El CEO o directores regionales, pueden aprobar presupuestos o cambiar el alcance de un proyecto global.
    
          .div(titulo="Nivel de interés")
            p Refleja el grado en que se verán afectados por el proyecto.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>. Agentes de ventas que usan el sistema a diario, tendrán alto interés en su funcionalidad.
    
          .div(titulo="Relación con el proyecto")
            p Distingue entre internos y externos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ejemplo</b>. En un sistema de inventarios, logística y contabilidad son internos; proveedores y clientes, son externos.

    p.mb-5 Los beneficios de una correcta gestión de <em>stakeholders</em>, son: 

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Optimización de recursos</b>: se evita invertir tiempo con actores de baja prioridad.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Comunicación efectiva</b>: se adapta el canal y contenido a cada grupo.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Mitigación de riesgos</b>: se anticipan conflictos o resistencias.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Mejor alineación con los objetivos</b> del proyecto y de la organización.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Herramientas para la clasificación de <em>stakeholders</em>
    p Una de las herramientas más útiles y comunes para clasificar <em>stakeholders</em> es la matriz de poder e interés, que permite visualizar de manera clara, cómo debe gestionarse la relación con cada parte interesada, según su capacidad de influencia en el proyecto y su nivel de interés en los resultados.
    p A continuación, se presenta una descripción de los cuatro cuadrantes de esta matriz:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Alta influencia / Alto interés")
            p Son los <em>stakeholders</em> más críticos. Poseen gran capacidad de influencia y están muy interesados en el proyecto. Es crucial mantenerlos informados y gestionarlos activamente.
    
          .div(titulo="Alta influencia / Bajo interés")
            p Tienen poder, pero escaso interés. No se interesan en los detalles, pero pueden afectar el desarrollo. Deben mantenerse satisfechos y con expectativas bien gestionadas.
    
          .div(titulo="Baja influencia / Alto interés")
            p Están interesados, pero tienen poca capacidad de decisión. Es importante mantenerlos informados y abordar sus preocupaciones para evitar malentendidos.
    
          .div(titulo="Baja influencia / Bajo interés")
            p Son los menos relevantes para la gestión activa del proyecto. Se les debe proporcionar información básica sin invertir muchos recursos.
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        h2(data-aos="fade-left") Ejemplo práctico: desarrollo de un sistema de gestión de proyectos
        p.mb-5 Supongamos que se está desarrollando un sistema de gestión de proyectos para una empresa de <em>software</em>. A continuación, se muestra cómo podrían clasificarse algunos <em>stakeholders</em> claves, según la matriz de poder e interés:

        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Alta influencia / Alto interés
                p.mb-0 Líderes del equipo de desarrollo, que necesitan un sistema eficiente y fácil de usar para mejorar la productividad.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Alta influencia / Bajo interés
                p.mb-0 Directores ejecutivos, interesados en que el sistema se entregue a tiempo, pero sin interés en los aspectos técnicos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Baja influencia / Alto interés
                p.mb-0 Miembros del equipo de soporte técnico, interesados en el funcionamiento, pero con poca capacidad de influir en decisiones.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/18.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Baja influencia / Bajo interés
                p.mb-0 Proveedores de <em>hardware</em>, que solo suministran equipos sin intervenir en el diseño o desarrollo del sistema.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Preparación de entrevistas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Preparación de entrevistas</b>, donde se aborda la importancia y metodología de planificar entrevistas efectivas con <em>stakeholders</em> en proyectos de desarrollo de <em>software</em>. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Preparación de entrevistas.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Técnicas de formulación de preguntas

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-3.text-white.p-5(data-aos="fade-left")
          p.mb-0 La formulación de preguntas es esencial en el proceso de recolección de requisitos, especialmente en entrevistas con <em>stakeholders</em>. La calidad de la información obtenida depende en gran medida de cómo se diseñan las preguntas. Una formulación adecuada puede fomentar respuestas detalladas y útiles, mientras que una pregunta ambigua o mal estructurada puede generar información vaga o incompleta.
    
    h2(data-aos="fade-left") Tipos de preguntas
    p.mb-5 Los tipos de preguntas se clasifican, según su estructura y el tipo de respuesta que buscan obtener. A continuación, se presenta una muestra comparativa, con sus características principales:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Cerradas")
            p <b>Descripción</b>. Preguntas que ofrecen opciones limitadas de respuesta (sí/no, selección múltiple).
            p <b>Ejemplo</b>. ¿Está satisfecho con la interfaz del sistema?
            h5 Ventajas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fáciles de analizar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Útiles para obtener datos cuantificables.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Generan respuestas consistentes.
            h5 Desventajas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Limitan la expresión de ideas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 No permiten explorar detalles.
    
          .div(titulo="Abiertas")
            p <b>Descripción</b>. Permiten respuestas amplias y reflexivas, ideales para conocer opiniones, experiencias y contextos.
            p <b>Ejemplo</b>. ¿Cómo describiría su experiencia con el sistema actual?
            h5 Ventajas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fomentan respuestas profundas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Revelan aspectos no previstos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ayudan a comprender motivaciones.
            h5 Desventajas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Requieren más tiempo para analizar
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Pueden resultar vagas si no se enfocan.
    
          .div(titulo="De sondeo")
            p <b>Descripción</b>. Se utilizan para profundizar o aclarar respuestas anteriores.
            p <b>Ejemplo</b>. ¿Qué tipo de mejoras específicas le gustaría ver en la interfaz de usuario?
            h5 Ventajas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Amplían la información obtenida.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Permiten mayor claridad en las respuestas.
            h5 Desventajas:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Pueden extender la duración de la entrevista.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Pueden incomodar si se usan en exceso.
    
    h2(data-aos="fade-left") Técnicas para mejorar la formulación de preguntas
    p.mb-5 Además de los tipos de preguntas, existen técnicas que ayudan a obtener respuestas más precisas y útiles:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pregunta "escalar"
              p Mide la intensidad de una opinión mediante escalas numéricas. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. En una escala del 1 al 5, ¿cómo calificaría la facilidad de uso del sistema?
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pregunta "espejo"
              p Reformula lo dicho por el entrevistado para que profundice o clarifique. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. ¿Podría explicar por qué considera que el sistema no es intuitivo?
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pregunta "por qué"
              p Indaga en las razones detrás de una opinión.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. ¿Por qué considera que la interfaz necesita mejoras?
    
    h2(data-aos="fade-left") Consideraciones al formular preguntas
    p Para asegurar la efectividad de las preguntas en entrevistas, deben seguirse algunos principios fundamentales:

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/25.svg" alt="" style="width: 90px")
              h5.text-center Claridad
              p.mb-0.text-center Evitar ambigüedades y tecnicismos innecesarios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/26.svg" alt="" style="width: 90px")
              h5.text-center Objetividad
              p.mb-0.text-center Formular preguntas neutrales, sin inducir respuestas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/27.svg" alt="" style="width: 90px")
              h5.text-center Concisión
              p.mb-0.text-center Ir al grano con preguntas breves y claras.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/28.svg" alt="" style="width: 90px")
              h5.text-center Enfoque
              p.mb-0.text-center Centrar las preguntas en los temas relevantes del proyecto.

        p Una buena entrevista depende de la capacidad del entrevistador para seleccionar el tipo y técnica de pregunta más adecuada, según el contexto y los objetivos. Saber cuándo usar preguntas cerradas para obtener datos precisos, cuándo optar por preguntas abiertas para explorar ideas y cuándo profundizar mediante sondeos o técnicas como el “por qué” o el “espejo”, garantiza la obtención de información valiosa para la toma de decisiones en el desarrollo de proyectos.
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Documentación y análisis de entrevistas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Documentación y análisis de entrevistas</b>, donde se aborda el proceso de registro y evaluación de la información obtenida en entrevistas dentro del levantamiento de requisitos para proyectos. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Documentación y análisis de entrevistas.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/29.png', alt='')
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Validación de la información recolectada
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4(data-aos="fade-left")
          p La validación de la información recolectada es un proceso fundamental para asegurar que los requisitos obtenidos durante las entrevistas con los <em>stakeholders</em> reflejan con precisión sus necesidades reales. Este paso garantiza la fidelidad de los datos y evita errores de interpretación que podrían comprometer el éxito del proyecto.
          p.mb-0 Una validación adecuada, aumenta la confiabilidad de los requisitos, reduce riesgos y mejora la calidad del producto final, al confirmar que las expectativas del usuario han sido correctamente comprendidas.
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                h5 Importancia de la validación:
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Verifica que los requisitos sean correctos, completos y viables.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Evita malentendidos o soluciones mal dirigidas.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Detecta contradicciones entre diferentes <em>stakeholders</em>.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Aporta claridad antes de tomar decisiones claves.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/31.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Métodos de validación
    p.mb-5 A continuación, se resumen los principales métodos utilizados para validar requisitos, con ejemplos y ventajas de cada uno:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/32.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Revisión de los <em>stakeholders</em>
              p Consiste en presentar un resumen de los requisitos recolectados para que los <em>stakeholders</em> confirmen su veracidad. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Verificar si las alertas personalizables están bien definidas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/33.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Prototipos
              p Se crean versiones preliminares del sistema para que los <em>stakeholders</em> interactúen y proporcionen <em>feedback</em>.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Prototipo de búsqueda avanzada para evaluar usabilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/34.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Reuniones de seguimiento
              p Revisión conjunta de requisitos priorizados entre equipo y <em>stakeholders</em>, para resolver dudas y alinear expectativas. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Confirmar lista final de funcionalidades clave.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/35.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pruebas de usuario
              p Evaluación del sistema en uso real con usuarios, observando si cumplen sus objetivos. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Usuario debe agregar un producto al carrito en una aplicación móvil.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/36.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Análisis de consistencia
              p Detección de contradicciones entre requisitos y revisión de alineación con los objetivos del proyecto. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. Diferencia en compatibilidad de navegadores entre usuarios.
    
    h2(data-aos="fade-left") Herramientas de apoyo a la validación
    p.mb-5 Existen herramientas digitales que facilitan la validación continua y la colaboración entre el equipo y los <em>stakeholders</em>:

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/37.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="38%" y="64.5%" numero="+")
                h5 Confluence
                p Documentación centralizada de requisitos y comentarios de revisión por parte de los <em>stakeholders</em>.
    
              .bg-color-white.box-shadow.p-3(x="37%" y="14%" numero="+")
                h5 Jira
                p Seguimiento de requisitos y tareas, visibilidad en tiempo real del avance del proyecto.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="58%" numero="+")
                h5 Trello
                p Gestión visual y colaborativa de requisitos, con comentarios y validaciones en cada tarjeta.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/38.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La validación de los requisitos no es un paso opcional, sino una práctica esencial para garantizar el éxito del proyecto. A través de técnicas como revisiones, prototipos, reuniones, pruebas y análisis de consistencia, se obtiene una visión clara y compartida entre usuarios y desarrolladores. La combinación de estas estrategias con herramientas adecuadas asegura un proceso transparente, colaborativo y alineado con los objetivos reales.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Análisis de necesidades
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Análisis de necesidades</b>, donde se aborda la diferenciación entre necesidades, deseos y requerimientos en el contexto del desarrollo de sistemas y <em>software</em>.  
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis de necesidades.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/39.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dspace.ups.edu.ec/bitstream/123456789/20957/1/UPS-GT003395.pdf " target="_blank" rel="noopener noreferrer") Universidad Politécnica Salesiana. (2021). Priorización de requisitos para una adecuada calidad de <em>software</em>. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/304  " target="_blank" rel="noopener noreferrer") Zapata Jaramillo, C. M. (2006). Alineación entre metas organizacionales y elicitación de requisitos del <em>software</em>. Red Dyna. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=adOD4yQRC7k " target="_blank" rel="noopener noreferrer") Elite <em>software</em> Engineering. (2023). ¿Por qué no entiendo los requerimientos? - La importancia de una buena estrategia de recolección [video]. YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cPyppW50uzI " target="_blank" rel="noopener noreferrer") Gómez-Prada, U. E. (2021). A&D - 02 – Requerimientos [video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
