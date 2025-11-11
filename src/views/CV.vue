<template>
  <div class="about">
    <n-flex justify="space-between">
      <h1 class="pink-text">Educação</h1>
      <h1 class="blue-text">Outros</h1>
      <h1 class="white-text">Experiência</h1>
    </n-flex>
    <n-grid y-gap="16" :cols="1">
      <n-gi class="cv-entry card-left">
        <CVEntry>
          <template v-slot:header>
            ISEP - Instituto Superior de Engenharia do Porto         
          </template>
          <template v-slot:headerExtra>
            Setembro 2012 - Agosto 2015
          </template>
          <template v-slot:description>
            Licenciatura em Engenharia Electrotécnica
          </template>
          <template v-slot:footer>
            Rua Dr. António Benardino de Almeida, 431 - 4249-015 Porto
          </template>
        </CVEntry>
      </n-gi>
      <n-gi class="cv-entry card-left">
        <CVEntry>
          <template v-slot:header>
            Curso de Electrónica Avançada - 175 Horas
          </template>
          <template v-slot:headerExtra>
            Julho 2013 - Dezembro 2013
          </template>
          <template v-slot:description>
            ATEC
          </template>
          <template v-slot:footer>
            Edf. Siemens, Av. Mário Brito (EN 107) 3570 - Freixieiro 4455-491 Perafita
          </template>
        </CVEntry>
      </n-gi>
      <n-gi class="cv-entry card-center">
        <CVEntry>
          <template v-slot:header>
            Voluntariado - Explicador            
          </template>
          <template v-slot:headerExtra>
            Setembro 2016 - 2019
          </template>
          <template v-slot:description>
            Já T'Explico         
          </template>
          <template v-slot:footer>
            Apoio a crianças e jovens do 5º ao 9º ano de escolaridade do distrito do Porto.          
          </template>
        </CVEntry>
      </n-gi>
      <n-gi class="cv-entry card-right">
        <CVEntry>
          <template v-slot:header>
            Web Developer
          </template>
          <template v-slot:headerExtra>
            Novembro 2017 - Julho 2020
          </template>
          <template v-slot:description>
            Dotlogic - Soluções Informáticas
          </template>
          <template v-slot:footer>
            Desenvolvimento web - <i>frontend</i> - na área médica (cardiologia), alguns projectos de <i>hardware</i>.
          </template>
        </CVEntry>
      </n-gi>
      <n-gi class="cv-entry card-center">
        <CVEntry>
          <template v-slot:header>
            <i>Make Or Break</i>
          </template>
          <template v-slot:headerExtra>
            8 a 12 - Setembro 2017
          </template>
          <template v-slot:description>
            48 Hour <i>Hackathon</i>     
          </template>
          <template v-slot:footer>
            Parte da equipa vencedora da edição de 2017 do <i>Make Or Break</i> na categoria <i>funny</i>.
          </template>
        </CVEntry>
      </n-gi>
      <n-gi class="cv-entry card-right">
        <CVEntry>
          <template v-slot:header>
            Web Developer
          </template>
          <template v-slot:headerExtra>
            Agosto 2020 - Presente
          </template>
          <template v-slot:description>
            Fujifilm
          </template>
          <template v-slot:footer>
            Desenvolvimento web - <i>full-stack</i> - na área médica.
          </template>
        </CVEntry>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
  import CVEntry from "../components/CVEntry.vue";
</script>

<style scoped lang="sass">
.cv-entry
  width: 60%
.card-left
  justify-self: flex-start
  > *
    @extend .pink
.card-right
  justify-self: flex-end
  > *
    @extend .white
.card-center
  justify-self: center
  > *
    @extend .blue

.pink
  background-color: rgba(255,198,194,0.5)
.white
  background-color: rgba(250,233,218,0.5)
.blue
  background-color: rgba(195,224,221,0.5)

.pink-text
  color: rgba(255,198,194)
.white-text
  color: rgba(250,233,218)
.blue-text
  color: rgba(195,224,221)

</style>
