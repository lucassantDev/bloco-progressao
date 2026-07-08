<template>
  <div class="hello">
    <h1>Olá usuário!</h1>

    <div class="second-div">
      <h2>{{ semanaDoMes }}ª semana de {{ nomeDoMes }}</h2>
      
      <div class="days-completed">
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
        <div class="day"></div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.second-div{
  width: 100%;
  height: 100px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button{
  padding:10px;
  cursor: pointer;
}

.days-completed{
  display: flex;
  gap: 2px;
}

.days-completed .day{
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid rgb(37, 28, 28);
  transition: transform .3s ease, margin-top .3s ease;
}

.days-completed .day:hover{
  transform: translateY(-4px);
  margin-top: -4px;
}
</style>
