<template>
  <div class="w-full h-screen p-8">
    <h1 class="text-3xl font-bold mb-6">Olá usuário!</h1>

    <div class="w-full h-24 border border-red-500 flex items-center justify-around">
      <h2 class="text-xl font-semibold">{{ semanaDoMes }}ª semana de {{ nomeDoMes }}</h2>
      
      <div class="flex gap-0.5">
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
        <div class="w-6 h-6 rounded-full border border-gray-900 transition-transform duration-300 hover:-translate-y-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dia: new Date().getDate(),
      mes: new Date().getMonth() + 1,
      meses: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    }
  },
  computed: {
    semanaDoMes() {
      return Math.ceil(this.dia / 7)
    },
    nomeDoMes() {
      return this.meses[this.mes - 1]
    }
  },
  
}

</script>
