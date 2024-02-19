import { defineStore } from "pinia";

export const useUsuarios = defineStore('Usuario',{
    state: () => ({
        ListadoUsuarios: [
          {
          email: 'Lalo123@gmail.com',
          password: '12345'
          },
          {
            email: 'Lalo1@gmail.com',
            password: '12345'
          },
          {
            email: 'otro@otro.com',
            password: '123'
          }
        ],
    }),
    getters:
    {
        getUsuarios(state){
            return state.ListadoUsuarios;
        },
    },
    actions:
    {
        async addUsuario(email: string, password: string){
            this.ListadoUsuarios.push({
                email: email,
                password: password
            });
        },
    }
})