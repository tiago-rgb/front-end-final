<template>
  <v-bottom-navigation :value="value" color="primary">
      <v-container>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/0ED2/production/_118949730_ronal.jpg">
          <p>Nome: Cristiano Ronaldo</p>
          <p>Idade: 36 anos</p>
          <p>Data de Nascimento: 05-02-1985</p>
          <p>Posição: Extremo-Esquerdo</p>
          <p>Nacionalidade: Portugal</p>
          <button @click="adicionaFav('Ronaldo')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://i.pinimg.com/originals/a4/97/d0/a497d0a0dea6fb57cf5ed0dbb707376f.jpg">
          <p>Nome: Lionel Messi</p>
          <p>Idade: 34 anos</p>
          <p>Data de Nascimento: 24-07-1987</p>
          <p>Posição: Médio-Ofensivo</p>
          <p>Nacionalidade: Argentina</p>
          <button @click="adicionaFav('Messi')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://aguiarbuenosaires.com/wp-content/uploads/2021/05/Maradona-com-a-Bola.jpg">
          <p>Nome: Diego Maradona</p>
          <p>Idade: 60 anos</p>
          <p>Data de Nascimento: 30-10-1960</p>
          <p>Data de Falecimento: 25-11-2020</p>
          <p>Posição: Avançado</p>
          <p>Nacionalidade: Argentina</p>
          <button @click="adicionaFav('Maradona')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://editorial.uefa.com/resources/0242-0e98b448be9f-1bb1ffb1cf9e-1000/toni_kroos_will_face_his_old_side_again_with_real_madrid.jpeg">
          <p>Nome: Toni Kroos</p>
          <p>Idade: 31 anos</p>
          <p>Data de Nascimento: 04-01-1990</p>
          <p>Posição: Médio-Centro</p>
          <p>Nacionalidade: Alemanha</p>
          <button @click="adicionaFav('Kroos')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
      </v-container>

      <v-row style="padding-top:80px; padding-right:10px;">
        <v-col v-for="(item,id) in favoritos" :key="id" class="d-flex child-flex" cols="4">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-card-actions>
            </v-card-actions>
            <div class="colfav">
              <div v-if="favoritos.length >0">
                <h3>
                  Favoritos
                </h3>
                <div>
                  {{item}}   <button @click="remofav(item)"><v-icon>mdi-heart</v-icon></button>
                </div>
              </div>
            </div>
          </v-row>
        </v-col>
      </v-row>
  </v-bottom-navigation>
</template>

<script>
export default{
    props : ['id'],
    data () {
    return {
      favoritos: []
      }
    },
    methods:{
      adicionaFav(item){
        if(this.favoritos.indexOf(item) === -1)
            this.favoritos.push(item);
      },
      remofav(index){
        //alert("vai remover");
        //console.log(this.favoritos);
        this.favoritos.splice(index, 1);
      }
    }
}
</script>