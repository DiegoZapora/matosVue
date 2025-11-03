<template>
    <div class="burguerContainer">
        <div class="burguerRows">
            <section v-for="burguer in burguers" :key="burguer._id">
                <span>{{ burguer.nome }}</span>
                <span>{{ burguer.Paes }}</span>
                <span></span>
                <span></span>
                <span>Adicionais: </span>
                <ul>
                    <li>Salame</li>
                    <li>sas</li>
                </ul>
                <span class="sas"></span>
                <div class="acoesBurguer">
                    <select name="status" id="status">
                        <option value="">Status Pedido</option>
                    </select>
                    <button class="btnCancelar">Cancelar Pedido</button>
                </div>
            </section>
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
                const data = res.json()

                this.burguers = data;

                console.log(this.burguers)

            }catch(err) {
                console.log(err)
            }
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