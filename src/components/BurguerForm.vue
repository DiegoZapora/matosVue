<template>
    <div>
        <p>Componente de Mensagem</p>
        <div class="container">
            <form class="burguerForm" @submit.prevent="MandaBurguer()">
                <InputCad for-text="nome" texto="Nome do Cliente: " tipo="text" id-f="nome" name-f="nome"
                    placeholder-f="Digite o seu nome" v-model="nome" />

                <div class="selectControl">
                    <label for="pao">Selecione o Pão: </label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione o Pão</option>
                        <option v-for="pao in opPao" :value="pao.tipoPao" :key="pao._id">{{ pao.tipoPao }}</option>
                    </select>
                </div>

                <div class="selectControl">
                    <label for="carne">Selecione a Carne: </label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">Selecione a Carne</option>
                        <option v-for="carne in opCarne" :value="carne.nomeCarne" :key="carne._id">{{ carne.nomeCarne }}
                        </option>
                    </select>
                </div>

                <div class="selectControl">
                    <label for="queijo">Selecione o Queijo: </label>
                    <select name="queijo" id="queijo" v-model="queijo">
                        <option value="">Selecione o Queijo</option>
                        <option v-for="queijo in opQueijo" :value="queijo.nomeQueijo" :key="queijo._id">{{queijo.nomeQueijo }}</option>
                    </select>
                </div>

                <SubmitBtn btn-text="Criar Burguer" />
            </form>
        </div>
    </div>
</template>

<script>
import InputCad from './InputCad.vue';
import SelectCad from './SelectCad.vue';
import SubmitBtn from './SubmitBtn.vue';

export default {
    name: "BurguerForm",
    components: {
        InputCad,
        SelectCad,
        SubmitBtn
    },
    data() {
        return {
            opPao: [],
            opCarne: [],
            opQueijo: [],
            opAdicio: [],
            nome: "",
            pao: "",
            carne: "",
            queijo: "",
            adicionais: "",
            msg: null,
            status: null
        }
    },

    methods: {
        async getIngredientes() {
            const res = await fetch("http://localhost:8085/ingredientes/todos")
            const data = await res.json()

            this.opPao = data.paes
            this.opCarne = data.carnes
            this.opQueijo = data.queijos
            this.opAdicio = data.adicional
        },

        async MandaBurguer() {
            const novoBurguer = {
                nome: this.nome,
                Paes: this.pao,
                Carnes: this.carne,
                Queijo: this.queijo
            }

            if (this.nome === "") {
                alert("ERRO! NOME INVALIDO!")
            } else if (this.pao === "" || this.carne === "" || this.queijo === "") {
                alert("SELECIONE OS INGREDIENTES DO HAMBURGUER")
            } else {
                try {
                    const res = await fetch("http://localhost:8085/burguers", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(novoBurguer)
                    })

                    if (!res.ok) {
                        throw new Error(`Erro: ${res.status}`)
                    }

                    this.nome = ""
                    this.pao = ""
                    this.carne = ""
                    this.queijo = ""

                    this.$router.push("/pedidos")

                } catch (err) {
                    console.error(err)
                }
            }


        }
    },
    mounted() {
        this.getIngredientes()
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.burguerForm {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: auto;
    padding: 10px;
    border-radius: 10px;
}

.selectControl {
    display: flex;
    flex-direction: column;
}

.selectControl select {
    width: 300px;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;
}

.selectControl label {
    font-weight: bold;
    margin-bottom: 15px;
    padding-left: 5px;
    color: #222;
    border-left: 4px solid #FCBA03;
}
</style>