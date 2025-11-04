<template>
    <div class="burguerContainer">
        <div class="burguerRows" v-for="burguer in burguers">
            <span>Nome: {{ burguer.nome }}</span>
            <span>Pão: {{ burguer.Paes }}</span>
            <span>Carne: {{ burguer.Carnes }}</span>
            <span>Queijo: {{ burguer.Queijo }}</span>
            <span>Adicionais: </span>
            <ul v-for="adicional in burguer.Adicional">
                <li>{{ adicional }}</li>
            </ul>
            <span class="sas"></span>
            <div class="acoesBurguer">
                <select name="status" id="status">
                    <option value="">Status Pedido</option>
                </select>
                <button class="btnCancelar">Cancelar Pedido</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            burguers: null,
            status: []
        }
    },
    methods: {
        async getBurguers() {
            try {
                const res = await fetch("http://localhost:8085/burguers")
                const data = await res.json()

                this.burguers = data;

            } catch (err) {
                console.log(err)
            }
        },
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