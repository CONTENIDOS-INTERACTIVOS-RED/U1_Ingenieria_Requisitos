<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Técnicas de levantamiento de requisitos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La correcta identificación de los requisitos, constituye un paso esencial en el desarrollo de sistemas de <em>software</em>. Para lograrlo, se hace necesario aplicar técnicas sistemáticas de levantamiento de información, orientadas a comprender de forma precisa, las necesidades, expectativas y limitaciones del usuario final y de los actores involucrados. Estas técnicas no solo facilitan la recolección de datos relevantes, sino que también contribuyen a establecer una comunicación efectiva entre el equipo técnico y los <em>stakeholders</em>, reduciendo el riesgo de ambigüedades o malentendidos.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Observación directa del usuario final
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La observación directa es una de las técnicas más valiosas en el levantamiento de requisitos, especialmente cuando se busca captar el comportamiento real de los usuarios en su entorno natural de trabajo. A diferencia de metodologías basadas en la verbalización de necesidades, esta técnica permite identificar acciones, decisiones, errores y omisiones que el usuario tal vez no percibe o no logra explicar con claridad.
        p(data-aos="fade-left") Fundamentada en los principios de la investigación etnográfica, la observación puede ser participante o no participante, según el grado de involucramiento del analista con el entorno observado. Los tipos de observación directa, son: 
    
   
    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Participante
                p.mb-0 El analista interactúa directamente con el entorno, incluso asumiendo tareas propias del usuario.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center No participante
                p.mb-0 El analista observa sin intervenir, registrando datos mediante notas, grabaciones o registros visuales.
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/6.svg', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Ambos enfoques resultan útiles, según el tipo de sistema, la sensibilidad de los datos y el nivel de acceso disponible. Por ejemplo, en el análisis de un sistema de gestión de turnos en una entidad de salud, la observación directa puede revelar problemas no detectados en entrevistas, como una interfaz obsoleta que dificulta el ingreso de datos o cuellos de botella en la asignación manual de citas.
            p Esta técnica no solo valida hipótesis, sino que también permite descubrir necesidades latentes, contribuyendo a soluciones más pertinentes y contextualizadas.
    
    p.mb-5 Autores como Pressman y Maxim (2020), recomiendan aplicar esta técnica en fases iniciales del proyecto, cuando aún no se ha formalizado una especificación completa. Por su parte, Sommerville (2016), subraya su utilidad como herramienta de verificación, al permitir contrastar lo que los usuarios dicen con lo que realmente hacen.

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Ventajas y limitaciones de la observación directa
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr.text-center
            th.bg-color-6.text-white.text-center Ventajas
            th.bg-color-6.text-white.text-center Limitaciones
        tbody.bg-color-7
          tr
            td <b>Detecta</b> interacciones espontáneas y errores sistemáticos.
            td Requiere tiempo y consentimiento ético.
          tr
            td <b>Identifica</b> el uso no documentado de herramientas.
            td Puede verse afectada por el sesgo del observador.
          tr
            td <b>Permite</b> analizar la influencia del entorno físico o social, en la toma de decisiones.
            td Puede generar cambios en el comportamiento de los usuarios (efecto Hawthorne).
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4.text-white
        p.mb-0 Para maximizar la utilidad de la observación directa, se recomienda utilizar instrumentos como listas de chequeo, diarios de campo, mapas de flujo de trabajo y grabaciones de pantalla (cuando sea posible). Además, es aconsejable triangular la información con otras técnicas como entrevistas o talleres, enriqueciendo así la interpretación de los datos.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Revisión de documentación existente

    p.mb-5 La revisión de documentación existente, es una técnica esencial en el levantamiento de requisitos, especialmente útil cuando ya se dispone de información formal o histórica sobre el sistema o proceso a mejorar. Se basa en el análisis de materiales previamente elaborados, como:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Manuales de usuario.

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Reportes técnicos.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-8.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Procedimientos operativos.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Formularios y diagramas de flujo.
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Modelos de bases de datos.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Contratos y actas de reuniones.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-3(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Normativas institucionales.

    p Esta técnica permite al analista obtener una visión general del sistema actual, comprender la lógica operativa vigente, identificar requisitos funcionales ya establecidos y detectar inconsistencias o necesidades de actualización. 
    p.mb-5 Además, asegura que los requisitos estén alineados con políticas organizacionales, regulaciones legales o estándares de calidad. Las aplicaciones prácticas son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Universidad - Automatización de procesos
              p Detección de redundancias en formularios, campos innecesarios y falta de validaciones. Permite proponer integración con bases de datos y verificaciones automáticas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Empresa privada - Sistema contable
              p Análisis de informes de auditoría, revela problemas de registro y falta de trazabilidad. Se infieren requisitos de seguridad e integridad de datos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Autores como Sommerville (2016), destacan la utilidad de esta técnica en entornos regulados, como salud, finanzas o gobierno, donde el cumplimiento normativo es crucial. Ignorar la documentación en estos contextos puede derivar en omisiones graves durante la construcción del sistema.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Asimismo, Pressman y Maxim (2020), afirman que permite construir una línea base de requisitos sin partir desde cero, lo que ahorra tiempo en etapas iniciales del proyecto. Esta línea base puede, luego, ser refinada o validada mediante técnicas complementarias como entrevistas o talleres.
      
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Ventajas y limitaciones
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr.text-center
            th.bg-color-6.text-white.text-center Ventajas
            th.bg-color-6.text-white.text-center Limitaciones
        tbody.bg-color-7
          tr
            td <b>Acceso</b> a información estructurada y jerarquizada.
            td Documentos pueden estar desactualizados o ser incompletos.
          tr
            td <b>Permite</b> identificar procesos claves, errores frecuentes y tareas redundantes.
            td Posible existencia de múltiples versiones, lo que puede generar confusión.
          tr
            td <b>Facilita</b> el cumplimiento normativo y alineación con estándares.
            td Información puede basarse en supuestos obsoletos.
          tr
            td <b>Provee</b> una base para validación posterior, con usuarios u otras técnicas.
            td Requiere validación con usuarios expertos o custodios del sistema.

    h2(data-aos="fade-left") Recomendaciones para su aplicación
    p.mb-5 Para aplicar esta técnica de forma eficaz, se sugiere un procedimiento sistemático que incluya:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5.bordes(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Recopilación organizada de documentos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Análisis crítico mediante herramientas como fichas de lectura o matrices comparativas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Clasificación, según origen (normativo, técnico, operativo), tipo (manual, acta, reporte) y nivel de actualidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Elaboración de un informe resumen con requisitos detectados o inferidos.
    
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 En síntesis, la revisión de documentación existente representa una herramienta poderosa para enriquecer el levantamiento de requisitos. Cuando se emplea de forma crítica y complementaria, permite construir una comprensión sólida del sistema en estudio, reducir el riesgo de omisiones y mejorar la trazabilidad de los requerimientos, durante todo el ciclo de vida del desarrollo de <em>software</em>.

    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.text-white
            h2.mb-4(data-aos="flip-up") Cuestionarios y encuestas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Cuestionarios y encuestas</b>, donde se aborda el uso de estas herramientas como métodos eficaces para recopilar información estructurada en procesos de levantamiento de requisitos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cuestionarios y encuestas.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Técnicas de prototipado
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") El prototipado es una técnica fundamental en el levantamiento de requisitos, especialmente útil cuando los requerimientos del usuario no están completamente definidos, o cuando se busca obtener retroalimentación temprana sobre la interfaz y funcionalidad de un sistema.
    
        .bg-color-10.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta técnica consiste en construir una versión preliminar del sistema, denominada prototipo, que permite representar de forma visual e interactiva las funcionalidades y características del producto final. Su objetivo principal es reducir la incertidumbre al inicio del proyecto, proporcionando a los desarrolladores una mejor comprensión de las necesidades y expectativas del usuario.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-5 A diferencia de la documentación textual, el prototipo permite una evaluación más concreta del sistema, dado que los usuarios pueden experimentar directamente con las funciones simuladas y aportar comentarios sobre la usabilidad, funcionalidad y diseño. Los tipos de prototipos son: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/21.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Prototipo evolutivo
                p.mb-0 Se construye de forma iterativa. Cada versión incorpora comentarios del usuario y se refina progresivamente.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/22.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Prototipo de baja fidelidad
                p.mb-0 Representación esquemática o en papel, sin programación. Útil para explorar conceptos rápidamente y visualizar interacciones.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Prototipo de alta fidelidad
                p.mb-0 Simula funcionalidades reales del sistema. Es interactivo, más cercano al producto final y permite probar flujos y diseño.
    
    p.mb-5 Los beneficios del prototipado son: 

    .bg-full-width.bg-color-11
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Facilita la comunicación entre usuarios y desarrolladores, al ofrecer una base tangible para el diálogo.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Permite detectar errores y omisiones antes de la implementación.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Promueve la validación temprana del diseño y los flujos de interacción.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Aporta flexibilidad,  puesto que los cambios son menos costosos en etapas iniciales del desarrollo.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/24.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 El prototipado es una técnica poderosa para explorar, validar y afinar los requerimientos de un sistema, especialmente en contextos donde las necesidades del usuario son difíciles de verbalizar o se descubren progresivamente. Al permitir una interacción directa con una versión inicial del sistema, esta técnica mejora la calidad del producto final y reduce el riesgo de desarrollar funcionalidades innecesarias o mal comprendidas.
  
    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Estrategias claves para el levantamiento de requisitos en el desarrollo de sistemas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Estrategias claves para el levantamiento de requisitos en el desarrollo de sistemas</b>, donde se aborda el proceso esencial de identificación y recopilación de necesidades en proyectos de desarrollo de <em>software</em>.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias claves para el levantamiento de requisitos en el desarrollo de sistemas.
    
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/25.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106450" target="_blank" rel="noopener noreferrer") Genero Bocco, M., Cruz Lemus, J. A. & Piattini Velthuis, M. G. (2014). Métodos de investigación en ingeniería del <em>software</em>. RA-MA Editorial.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Hedi-Qobgbc " target="_blank" rel="noopener noreferrer") Elite <em>software</em> Engineering. (2020). 01 - Ingeniería de Requerimientos ¿Qué son los requerimientos de <em>software</em>? [video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
