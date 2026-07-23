<template>
    <div class="w-full h-screen flex flex-col items-center justify-center bg-blue-950">
        
        <h1 class="secondFontStyle-Tittle text-gray-200">
            Pomodoro
        </h1>
        <div class="w-5/6 h-1/2 flex flex-col items-center justify-evenly ">

            <div class="w-64 h-40 border-2 rounded-xl flex items-center justify-center ">
                <h1 class="text-7xl secondFontStyle text-gray-200">
                    {{time}}                
                </h1>
            </div>

            <div class='flex gap-6'>
                <button
                    @click="comecar"
                    class="p-2 rounded-md secondFontStyle-Button text-gray-500 trasition duration-100 border-2 border-gray-500 hover:text-gray-200 hover:border-gray-200">
                    começar
                </button>
                <button
                    @click="resetar"
                    class="p-2 rounded-md secondFontStyle-Button text-gray-500 trasition duration-100 border-2 border-gray-500 hover:text-gray-200 hover:border-gray-200">
                    resetar
                </button>
            </div>

        </div>
        
    </div>
</template>
<script setup>
import { ref, computed, onUnmounted } from 'vue'

const minutos = 25
const segundosRestantes = ref(minutos * 60) // 1500 segundos
const rodando = ref(false)
let intervalo = null

const time = computed(() => {
  const min = Math.floor(segundosRestantes.value / 60).toString().padStart(2, '0')
  const seg = (segundosRestantes.value % 60).toString().padStart(2, '0')
  return `${min}:${seg}`
})

function comecar() {
  if (rodando.value) return
  rodando.value = true

    // setInterval/setTimeOut -> arrow function, dentro da função, cria o bloco de código, depois passa o tempo que essa função vai aconter/ser executada
  intervalo = setInterval(() => {
    if (segundosRestantes.value > 0) {
      segundosRestantes.value--
    } else {
      clearInterval(intervalo)
      rodando.value = false
    }
  }, 1000)
}

function resetar(){
    clearInterval(intervalo);
    rodando.value = false;
    segundosRestantes.value = minutos * 60 
}

onUnmounted(() => clearInterval(intervalo))

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

:root{
    --Second-font: 'Instrument Serif';
}

.secondFontStyle{
    font-family: var(--Second-font);
}

.secondFontStyle-Tittle{
    font-family: var(--Second-font);
    font-size: 12rem;
}

.secondFontStyle-Button{
    font-family: var(--Second-font);
    font-size: 1.5rem;
}   
</style>