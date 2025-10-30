<template>
    <div>
        <p>Componente de Mensagem</p>
        <div class="container">
            <form class="burguerForm">
                <InputCad for-text="nome" texto="Nome do Cliente: " tipo="text" id-f="nome" name-f="nome"
                    placeholder-f="Digite o seu nome" />

                <SelectCad for-s="pao" texto-s="Escolha seu Pão:" name-s="pao" id-s="pao"
                    select-txt="Selecione o Pão" />

                <SelectCad for-s="carne" texto-s="Escolha sua Carne:" name-s="carne" id-s="carne"
                    select-txt="Selecione a Carne" />

                <SelectCad for-s="queijo" texto-s="Escolha seu Queijo:" name-s="queijo" id-s="queijo"
                    select-txt="Selecione o Queijo" />

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
            paoBack: null,
            carnesBack: null,
            queijosBack: null,
            nome: null,
            pao: null,
            carne: null,
            queijo: null,
            msg: null,
            status: null
        }
    },

    methods: {
        /*async getIngredientes () {
            const res = await fetch("http://localhost:8085")
            const data = await res.json()

            this.paoBack = data.paes
            this.carnesBack = data.carne
            this.queijosBack = data.queijo
        }*/
    },
    mounted() {
        /*this.getIngredientes()*/
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
</style>