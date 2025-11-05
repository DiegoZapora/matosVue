<template>
    <form class="paoControl" @submit.prevent="mandarPao()">

        <InputCad for-text="pao" texto="Cadastrar Pão" tipo="text" placeholder-f="Digite o Nome do Pão" id-f="pao"
            name-f="pao" v-model="pao" />

        <SubmitBtn btn-text="Cadastrar Pão" />
    </form>
</template>

<script>
import InputCad from '@/components/InputCad.vue';
import SubmitBtn from '@/components/SubmitBtn.vue';

export default {
    components: {
        InputCad,
        SubmitBtn
    },
    data() {
        return {
            pao: ""
        }
    },
    methods: {
        async mandarPao() {
            const novoPao = {
                tipoPao: this.pao
            }
            const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
            try {
                const res = await fetch(`${API_URL}/cadastrar/pao`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(novoPao)
                })

                if (!res.ok) {
                    throw new Error("Erro ao Cadastrar Pão");
                }

                this.pao = ""
                this.$router.push("/ingredientes")
            } catch (err) {
                console.error("Erro no mandarPao: ", err)
            }
        }
    }
}
</script>

<style scoped>
.paoControl {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
</style>