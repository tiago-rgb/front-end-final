<template>
  <v-bottom-navigation :value="value" color="primary">
      <v-container>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://img2.storyblok.com/720x720/filters:quality(100)/f/68180/400x400/dd35a627f3/00000005994.png">
          <p>Nome do Clube: F.C.Porto</p>
          <p>Cidade: Porto</p>
          <p>Ano em que foi fundado: 1893</p>
          <p>Titulos: 79</p>
          <p>Nome da Claque: Super Dragoes</p>
          <button @click="adicionaFav('Porto')">  
            <v-icon>mdi-heart</v-icon>
          </button>
          
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://knoow.net/wp-content/uploads/2016/06/Logo-Sporting.jpg">
          <p>Nome do Clube: Sporting</p>
          <p>Cidade: Lisboa</p>
          <p>Ano em que foi fundado: 1904</p>
          <p>Titulos: 52</p>
          <p>Nome da Claque: Juventude Leonina</p>
          <button @click="adicionaFav('Sporting')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://upload.wikimedia.org/wikipedia/pt/f/f0/500px-SL_Benfica_logo_svg.png">
          <p>Nome do Clube: S.L.Benfica</p>
          <p>Cidade: Lisboa</p>
          <p>Ano em que foi fundado: 1904</p>
          <p>Titulos: 87</p>
          <p>Nome da Claque: No Name Boys</p>
          <button @click="adicionaFav('Benfica')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/150px-Sporting_Clube_Braga.png">
          <p>Nome do Clube: Sporting Clube de Braga</p>
          <p>Cidade: Braga</p>
          <p>Ano em que foi fundado: 1921</p>
          <p>Titulos: 8</p>
          <p>Nome da Claque: Red Boys</p>
          <button @click="adicionaFav('Braga')"> 
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