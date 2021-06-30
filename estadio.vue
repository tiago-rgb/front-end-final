<template>
  <v-bottom-navigation :value="value" color="primary">
      <v-container>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://besthqwallpapers.com/Uploads/26-12-2018/75831/thumb2-estadio-do-dragao-hdr-4k-porto-stadium-empty-stadium.jpg">
          <p>Nome do Estádio: Estádio do Dragão</p>
          <p>Ano que foi fundado: 2003</p>
          <p>Clube a que pertence: F.C.Porto</p>
          <p>Capacidade: 50033</p>
          <button @click="adicionaFav('Estádio do Dragão')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://s7a5n8m2.stackpathcdn.com/wp-content/uploads/2015/03/estadio-da-luz-lisboa.jpg">
          <p>Nome do Estádio: Estádio da Luz</p>
          <p>Ano que foi fundado: 2003</p>
          <p>Clube a que pertence: S.L.Benfica</p>
          <p>Capacidade: 65642</p>
          <button @click="adicionaFav('Estádio da Luz')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://cdn.record.pt/images/2021-05/img_476x268$2021_05_02_09_51_51_1845173.jpg">
          <p>Nome do Estádio: Estádio José Alvalade</p>
          <p>Ano que foi fundado: 2003</p>
          <p>Clube a que pertence: Sporting</p>
          <p>Capacidade: 50095</p>
          <button @click="adicionaFav('Estádio José Alvalade')"> 
            <v-icon>mdi-heart</v-icon>
          </button>
        </div>
        <div class="container" style="margin-top: 100px; margin-left: 200px">
          <img src="https://st3.idealista.pt/news/arquivos/2018-09/estadio.jpg?sv=ksPuz3eR">
          <p>Nome do Estádio: Estádio Municipal de Braga</p>
          <p>Ano que foi fundado: 2003</p>
          <p>Clube a que pertence: Sporting Clube de Braga</p>
          <p>Capacidade: 30286</p>
          <button @click="adicionaFav('Estádio Municipal de Braga')"> 
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