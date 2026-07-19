<template>
    <div class="w-full h-screen flex items-center flex-col justify-evenly bg-slate-950">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-300 bg-clip-text text-transparent">form.</h1>
        <form
            class="border border-emerald-400 bg-slate-800 w-2/6 h-4/6 flex flex-col items-center justify-evenly rounded-xl"
            @submit.prevent="registerUser"
        >
            <h2 class="text-gray-200 text-3xl font-semibold">Cadastro</h2>

            <input
                v-model="form.nome"
                type="text"
                class="w-4/5 text-lg p-2.5 border border-gray-300 rounded"
                placeholder="nome"
                required
            >
            <input
                v-model="form.sobrenome"
                type="text"
                class="w-4/5 text-lg p-2.5 border border-gray-300 rounded"
                placeholder="sobrenome"
                required
            >
            <input
                v-model="form.email"
                type="email"
                class="w-4/5 text-lg p-2.5 border border-gray-300 rounded"
                placeholder="email"
                required
            >
             <input
                v-model="form.cpf"
                type="text"
                class="w-4/5 text-lg p-2.5 border border-gray-300 rounded"
                placeholder="cpf"
                required
            >
            <input
                v-model="form.senha"
                type="password"
                class="w-4/5 text-lg p-2.5 border border-gray-300 rounded"
                placeholder="senha"
                required
            >
           
            <!-- <input
                v-model="form.confirmPassword"
                type="password"
                class="w-4/5 text-lg p-2.5 border border-gray-300 rounded"
                placeholder="confirmar senha"
                required
            > -->

            <p v-if="errorMessage" class="text-red-400 text-sm">{{ errorMessage }}</p>
            <p v-if="successMessage" class="text-emerald-400 text-sm">{{ successMessage }}</p>

            <button
                type="submit"
                class="border border-emerald-200 bg-emerald-400 w-1/3 p-2 cursor-pointer rounded-md text-xl hover:bg-emerald-500"
            >
                Cadastrar
            </button>

            <p class="font-semibold text-gray-400 text-center mb-4 signup-text">
                <router-link to="/" class="signup-link">
                    <span class="cursor-pointer text-gray-200 font-semibold">Retornar</span>
                </router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                nome: '',
                sobrenome: '',
                email: '',
                cpf: '',
                senha: '',
            },
            errorMessage: '',
            successMessage: ''
        }
    },
    methods: {
        async registerUser() {
            this.errorMessage = ''
            this.successMessage = ''

            // if (this.form.password !== this.form.confirmPassword) {
            //     this.errorMessage = 'As senhas não conferem.'
            //     return
            // }

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/usuarios', {
                    nome: this.form.nome,
                    sobrenome: this.form.sobrenome,
                    email: this.form.email,
                    cpf: this.form.email,
                    senha: this.form.senha
                })

                this.successMessage = response.data.message || 'Cadastro realizado com sucesso!'
                this.form = {
                    nome: '',
                    sobrenome: '',
                    email: '',
                    cpf: '',
                    senha: '',
                }

                // salva o usuário recém-criado no localStorage
                localStorage.setItem('usuario', JSON.stringify(response.data))

                this.form = { nome: '', sobrenome: '', email: '', senha: '' }

                // opcional: redirecionar pro login após cadastro
                setTimeout(() => this.$router.push('/Main'), 1500)
            } catch (error) {
                this.errorMessage = error.response?.data?.message || 'Erro ao cadastrar usuário.'
            }
        }
    }
}
</script>