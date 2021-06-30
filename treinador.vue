<template>
  <v-bottom-navigation :value="value" color="primary">
      <v-container>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=4fe16530-acf0-4814-a8f8-ab91f3ee503d&w=744&h=495&t=20200724141153">
          <p>Nome: Sérgio Conceição</p>
          <p>Idade: 46 anos</p>
          <p>Data de Nascimento: 15-11-1974</p>
          <p>Nacionalidade: Portugal</p>
          <p>9 Anos de Carreira</p>
          <button @click="adicionaFav('Sérgio Conceição')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://static.globalnoticias.pt/jn/image.jpg?brand=JN&type=generate&guid=fcbad3b4-8f08-4905-a041-cf773d62ae79&w=744&h=495&t=20210128175219">
          <p>Nome: Jorge Jesus</p>
          <p>Idade: 66 anos</p>
          <p>Data de Nascimento: 24-07-1954</p>
          <p>Nacionalidade: Portugal</p>
          <p>31 Anos de Carreira</p>
          <button @click="adicionaFav('Jorge Jesus')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://cdn-images.rtp.pt/icm/noticias/images/46/46184526e3ff52a1e0675eb8f1041b5d?w=860&q=90&rect=0,36,2678,1468">
          <p>Nome: Zinedine Zidane</p>
          <p>Idade: 49 anos</p>
          <p>Data de Nascimento: 23-06-1972</p>
          <p>Nacionalidade: França</p>
          <p>5 Anos de Carreira</p>
          <button @click="adicionaFav('Zidane')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://boasnovasmg.com.br/wp-content/uploads/2018/08/pep-guardiola.jpg">
          <p>Nome: Pep Guardiola</p>
          <p>Idade: 50 anos</p>
          <p>Data de Nascimento: 18-01-1971</p>
          <p>Nacionalidade: Espanha</p>
          <p>14 Anos de Carreira</p>
          <button @click="adicionaFav('Guardiola')"> 
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