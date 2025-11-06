<template>
    <div>
        <Transition name="fade">
            <Msg :mensagem="msg" v-if="msg" />
        </Transition>
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
                        <option v-for="queijo in opQueijo" :value="queijo.nomeQueijo" :key="queijo._id">
                            {{ queijo.nomeQueijo }}</option>
                    </select>
                </div>

                <div class="checkControl">
                    <label id="adcTi" for="adicionais">Selecione os Adicionais:</label>
                    <div v-for="adional in opAdicio" :key="adional._id" class="adiciControl">
                        <input type="checkbox" name="adicionais" v-model="adicionais" :value="adional.nome">
                        <span>{{ adional.nome }}</span>
                    </div>
                </div>

                <SubmitBtn btn-text="Criar Burguer" />
            </form>
        </div>
    </div>
</template>

<script>
import InputCad from './InputCad.vue';
import SubmitBtn from './SubmitBtn.vue';
import Msg from './Msg.vue';

export default {
    name: "BurguerForm",
    components: {
        InputCad,
        SubmitBtn,
        Msg
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
            adicionais: [],
            msg: null,
            status: null
        }
    },

    methods: {
        async getIngredientes() {
            const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
            try {
                const res = await fetch(`${API_URL}/ingredientes/todos`)
                const data = await res.json()

                this.opPao = data.paes
                this.opCarne = data.carnes
                this.opQueijo = data.queijos
                this.opAdicio = data.adicional
            } catch (err) {
                console.log(err)
            }

        },

        async MandaBurguer() {
            const novoBurguer = {
                nome: this.nome,
                Paes: this.pao,
                Carnes: this.carne,
                Queijo: this.queijo,
                Adicional: this.adicionais
            }

            if (this.nome === "") {
                this.msg = "Insira um nome valido!"
            } else if (this.pao === "" || this.carne === "" || this.queijo === "") {
                this.msg = "Selecione os Ingredientes!"
            } else {
                const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
                try {
                    const res = await fetch(`${API_URL}/burguers`, {
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
                    this.adicionais = ""

                    this.msg = `Pedido realizado com sucesso`
                    this.limpaMsg()

                } catch (err) {
                    console.error(err)
                }
            }
        },
        limpaMsg() {
            setTimeout(() => {
                this.msg = ""
            }, 3000)
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
    height: auto;
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
    min-height: 500px;
    height: auto;
    max-height: 1400px;
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

.checkControl {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
}

.checkControl label {
    font-weight: bold;
    margin-bottom: 15px;
    padding-left: 5px;
    color: #222;
    border-left: 4px solid #FCBA03;
}

.adiciControl {
    display: flex;
    width: 50%;
    margin-bottom: 10px;
}

.adiciControl span,
.adiciControl input {
    width: auto;
}

.adiciControl span {
    font-weight: bold;
    margin-left: 6px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>