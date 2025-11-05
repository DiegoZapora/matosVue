<template>
    <div class="burguerContainer">
        <p v-if="burguers == false">Nenhum pedido cadastrado</p>
        <Msg :mensagem="msg" v-if="msg" />
        <div class="burguerRows" v-for="burguer in burguers">
            <span>Nome: {{ burguer.nome }}</span>
            <span>Pão: {{ burguer.Paes }}</span>
            <span>Carne: {{ burguer.Carnes }}</span>
            <span>Queijo: {{ burguer.Queijo }}</span>
            <span>Adicionais: </span>
            <ul>
                <li v-for="(adicional, index) in burguer.Adicional" :key="index">{{ adicional }}</li>
            </ul>
            <span class="sas"></span>
            <div class="acoesBurguer">
                <select name="status" v-model="burguer.status"
                    @change="atualizaStatus(burguer._id, $event.target.value)">
                    <option :value="s" v-for="(s, index) in status" :key="index">{{ s }}</option>
                </select>
                <button class="btnCancelar" @click="deleteBurguer(burguer._id)">Cancelar Pedido</button>
            </div>
        </div>
    </div>
</template>

<script>
import Msg from './Msg.vue';
export default {
    name: "Dashboard",
    data() {
        return {
            burguers: null,
            msg: null,
            status: ["Solicitado", "Em Produção", "Finalizado"]
        }
    },
    components: {
        Msg
    },
    methods: {
        async getBurguers() {
            const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
            try {
                const res = await fetch(`${API_URL}/burguers`)
                const data = await res.json()

                this.burguers = data;

            } catch (err) {
                console.log(err)
            }
        },

        async deleteBurguer(id) {
            const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
            try {
                const res = await fetch(`${API_URL}/burguers/${id}`, {
                    method: "DELETE"
                })

                this.burguers = this.burguers.filter(burguer => burguer._id !== id)

                this.msg = "Pedido deletado com sucesso!"
                this.limpaMsg()
            } catch (err) {
                console.log(err)
            }
        },

        async atualizaStatus(id, novoStatus) {
            const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
            try {
                const res = await fetch(`${API_URL}/burguers/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status: novoStatus })
                })

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                this.msg = `Status do pedido atualizado para ${novoStatus}`
                this.limpaMsg()

                if (novoStatus === "Finalizado") {
                    setTimeout(() => {
                        this.burguers = this.burguers.filter(burguer => burguer._id !== id)
                    }, 30000);
                }


            } catch (err) {
                console.log(err)
            }
        },
        limpaMsg() {
            setTimeout(() => {
                this.msg = ""
            }, 5000)
        }
    },
    mounted() {
        this.getBurguers()
    }
}
</script>

<style scoped>
.burguerContainer {
    width: 100%;
    height: 60vh;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
}

.burguerRows {
    width: 300px;
    display: flex;
    flex-direction: column;
    border: 3px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: rgba(182, 112, 8, 0.774);
    color: black;
    font-weight: bold;
}

.burguerRows button {
    border: 1px solid black;
    border-radius: 5px;
    background-color: black;
    color: rgb(255, 154, 2);
    font-weight: bold;
    transition: .5s;
}

.burguerRows button:hover {
    background-color: red;
    color: white;
}

.burguerRows select {
    background-color: black;
    color: rgb(255, 153, 0);
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
}

.burguerRows ul {
    list-style: inside;
}

.acoesBurguer {
    display: flex;
    justify-content: space-between;
}

.sas {
    border: 4px solid black;
    border-radius: 3px;
    margin-bottom: 5px;
}
</style>