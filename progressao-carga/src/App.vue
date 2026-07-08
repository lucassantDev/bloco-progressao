<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <LoginScreen/>
    <MainScreen/>
  </div>
</template>

<script>
import MainScreen from './components/MainScreen.vue'
import LoginScreen from './components/LoginScreen.vue'

export default {
  name: 'App',
  components: {
    MainScreen,
    LoginScreen
  }
}
</script>

