<template>
    <h1>Ingredientes Cadastrados: </h1>
    <hr>
    <p>Pães: </p>
    <ul v-for="pao in paes" :key="pao._id">
        <li>{{ pao.tipoPao }}</li>
    </ul>
    <hr>
    <p>Queijos: </p>
    <ul v-for="queijo in queijos" :key="queijos._id">
        <li>{{ queijo.nomeQueijo }}</li>
    </ul>
    <hr>
    <p>Carnes: </p>
    <ul v-for="carne in carnes" :key="carne._id">
        <li>{{ carne.nomeCarne }}</li>
    </ul>
    <hr>
    <p>Adicionais: </p>
    <ul v-for="adicional in adicionais" :key="adicional._id">
        <li>{{ adicional.nome }}</li>
    </ul>

    <button>
        <RouterLink to="/cadastrar">Casdastrar Ingredientes</RouterLink>
    </button>
</template>

<script>
export default {
    data() {
        return {
            paes: "",
            carnes: "",
            queijos: "",
            adicionais: ""
        }
    },
    methods: {
        async buscaIngredientes() {
            try {
                const res = await fetch("http://localhost:8085/ingredientes/todos")
                const data = await res.json()

                this.paes = data.paes
                this.carnes = data.carnes
                this.queijos = data.queijos
                this.adicionais = data.adicional
            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        this.buscaIngredientes()
    }
}
</script>