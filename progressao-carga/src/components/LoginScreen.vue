<template>
    <div class="w-full h-screen flex items-center flex-col justify-evenly bg-slate-950">
        <h1 class="text-9xl font-bold text-purple-200">form.</h1>
        <form class="border border-purple-400 bg-slate-800 w-2/6 h-2/6 flex flex-col items-center justify-around rounded-xl">
            <input type="text" class="w-4/5 text-lg p-2.5 border border-gray-300 rounded mt-6">
            <input type="password" class="w-4/5 text-lg p-2.5 border border-gray-300 rounded">
            <button @click="showAlert" class="border border-purple-400 w-1/3 p-2 cursor-pointer bg-gray-200 rounded-md text-xl">Acessar</button>
        </form>
    </div>
</template>

<script>
    export default{
        methods: {
            showAlert() {
                alert('Botão clicado!')
            }
        }
    }
</script>