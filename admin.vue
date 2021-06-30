<template>
<div>
    <form @submit.prevent="submeterFormulario" action="form" style="padding:10px">
    <p>Clube</p>
    <div class="input-control">
      <label>Imagem do Clube</label>
      <input type="text" v-model="novoProduto.ImagemdoClube">
    </div>
    <div class="input-control">
      <label>Nome do Clube</label>
      <input type="text" v-model="novoProduto.NomedoClube">
    </div>
    <div class="input-control">
      <label>Ano em que foi fundado</label>
      <input type="text" v-model="novoProduto.Anoemquefoifundado">
    </div>
    <div class="input-control">
      <label>Titulos</label>
      <input type="text" v-model="novoProduto.Titulos">
    </div>
    <div class="input-control">
      <label>Nome da Claque</label>
      <input type="text" v-model="novoProduto.NomedaClaque">
    </div>

    <p>Treinador</p>
    <div class="input-control">
      <label>Imagem do Treinador</label>
      <input type="text" v-model="novoProduto.ImagemdoTreinador">
    </div>
    <div class="input-control">
      <label>Nome do Treinador</label>
      <input type="text" v-model="novoProduto.NomedoTreinador">
    </div>
    <div class="input-control">
      <label>Idade</label>
      <input type="text" v-model="novoProduto.Idade">
    </div>
    <div class="input-control">
      <label>Data de Nascimento</label>
      <input type="text" v-model="novoProduto.DatadeNascimento">
    </div>
    <div class="input-control">
      <label>Nacionalidade</label>
      <input type="text" v-model="novoProduto.Nacionalidade">
    </div>
    <div class="input-control">
      <label>Anos de Carreira</label>
      <input type="text" v-model="novoProduto.AnosdeCarreira">
    </div>

  <br>
  <button type="submit" class="button" >
    Enviar
  </button>
  </form>

  <div v-if="mostraAviso">
    Insere os dados.
  </div>

  <div v-for="(item,id) in info" :key="id">
      {{item.nomegenero}} 
      <img width="20%" :src="item.imagem">
  </div>


</div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      novoProduto:{
        ImagemdoClube:'',
        NomedoClube:'',
        Anoemquefoifundado:'',
        Titulos:'',
        NomedaClaque:'',
        ImagemdoTreinador:'',
        NomedoTreinador:'',
        Idade:'',
        DatadeNascimento:'',
        Nacionalidade:'',
        AnosdeCarreira:'',
      },
      mostraAviso: false,
      info: []
    }
  },
  methods:{
    submeterFormulario() {
      if(this.novoProduto.ImagemdoClube != '' && this.novoProduto.NomedoClube != '' && this.novoProduto.Anoemquefoifundado != '' && this.novoProduto.Titulos != '' && this.novoProduto.NomedaClaque != '' && this.novoProduto.ImagemdoTreinador != '' && this.novoProduto.NomedoTreinador != '' && this.novoProduto.Idade != '' && this.novoProduto.DatadeNascimento != '' && this.novoProduto.Nacionalidade != '' && this.novoProduto.AnosdeCarreira != ''){
        this.mostraAviso= false;
        return axios.post('https://front-end-12465-default-rtdb.firebaseio.com/', this.novoProduto);
      } 
      else {
        alert("Campos Vazios");
        this.mostraAviso= true;    
        }
  },

}
}
</script>
<style scoped>
.form{
  max-width: 550px;
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.button{
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #FFA500;
  background-color: white;
  color: #FFA500;
  text-decoration: none;
  padding: 10px 30px;
}
.button:hover,
.button:active {
  color: #fff;
  background-color: #FFA500;
}

.input-control {
  margin: 10px 0;
}
.input-control label {
  display: block;
  font-weight: bold;
  color: #FFA500;
}
.input-control input{
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px; 
}
.input-control input:focus{
  background-color: #eee;
  outline: none;
}
</style>