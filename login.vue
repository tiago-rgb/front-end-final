<template>
    <div class="flex-container">
        <div id="login">
            <v-layout>
                <v-flex >
                    <v-container class="altura" >
                        <v-card flat>
                            <v-card-title primary-title>
                                <h4>
                                    Login
                                </h4>
                            </v-card-title>
                            <v-form>
                                <v-text-field  name="Email" label="Email" type="email" v-model="email" required  :rules="[() => model2.length > 0 || 'Campo Obrigatorio']" v-on:keyup.enter=registo()></v-text-field>
                                <div v-if="flag_email">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_email}}
                                         </v-alert>
                                </div>
                                <v-text-field  name="Password" label="Password" type="password" v-model="password" required v-on:keyup.enter=registo()></v-text-field>
                                <div v-if="flag_pass">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_pass}}
                                         </v-alert>
                                </div>
                                <v-card-actions>
                                    <v-btn primary large block @click="login()" >Login</v-btn>
                                </v-card-actions>
                                <v-card-actions>
                                    <v-btn primary large block @click="registar()" >Registar</v-btn>
                                </v-card-actions>

                                
                            </v-form>
                        </v-card>
                    </v-container>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase';


export default {
  data() {
    return {    
    email: '',
    password: '',
    alerta_email : 'Email não valido',
    alerta_pass : 'Password incorreta',
    flag_email : false,
    flag_pass : false,
    };
  },

  
  methods: {
    login(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.email);
                this.$router.push("/");
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                 console.log(errorCode + "-"+ errorMessage);
                 this.$router.push("/registar");
            });
            
    },
    registar(){
        this.$router.push("/registar");
    }
  },
};
</script>