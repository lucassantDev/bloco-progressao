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

            <button class="p-2 rounded-md secondFontStyle-Button text-gray-200 trasition duration-100 hover:border-2 hover:border-gray-200">
                começar
            </button>

        </div>
        
    </div>
</template>
<script setup>

const time = new Date().toLocaleTimeString('pt-BR');


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