<template>
  <div id="app">
    <div id="nav">
      <div>
        <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Projeto Final</v-toolbar-title>

          <v-spacer>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/clube">Clube</router-link> |
            <router-link to="/treinador">Treinador</router-link> |
            <router-link to="/jogador">Jogador</router-link> |
            <router-link to="/estadio">Estadio</router-link> |
            <router-link to="/admin">Admin</router-link> 
          </v-spacer>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-toolbar>
      </div>
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/produto">Produto</router-link> 
      <router-link to="/registar">registar</router-link>  -->
    </div>
    <router-view/>
  
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
