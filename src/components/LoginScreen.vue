<template>
    <div class="w-full h-screen flex items-center flex-col justify-evenly bg-slate-950">
        <h1 class="text-9xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-300 bg-clip-text text-transparent">form.</h1>
        <form class="border border-emerald-400 bg-slate-800 w-2/6 h-2/6 flex flex-col items-center justify-around rounded-xl">
            <input type="text" class="w-4/5 text-lg p-2.5 border border-gray-300 rounded mt-6">
            <input type="password" class="w-4/5 text-lg p-2.5 border border-gray-300 rounded">
            <button @click="showAlert" class="border border-emerald-400 w-1/3 p-2 cursor-pointer bg-gray-200 rounded-md text-xl">Acessar</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
    data() {
        return {
        form: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errorMessage: '',
        successMessage: ''
        }
    },
    methods: {
        async registerUser() {
        this.errorMessage = ''
        this.successMessage = ''

        if (this.form.password !== this.form.confirmPassword) {
            this.errorMessage = 'As senhas não conferem.'
            return
        }

        try {
            const response = await axios.post('http://localhost:3000/register', {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password
            })

            this.successMessage = response.data.message || 'Cadastro realizado com sucesso!'
            this.form = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
            }
        } catch (error) {
            this.errorMessage = error.response?.data?.message || 'Erro ao cadastrar usuário.'
            }
            }
        }
    }
</script>