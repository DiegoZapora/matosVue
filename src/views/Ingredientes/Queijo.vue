<template>
    <form class="queijoControl" @submit.prevent="mandaQueijo">
        <InputCad for-text="queijo" texto="Cadastrar Queijo" tipo="text" placeholder-f="Digite o Nome do Queijo" id-f="queijo" name-f="queijo" v-model="queijo" />

        <SubmitBtn btn-text="Cadastrar Queijo" />
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
            queijo: ""
        }
    },
    methods: {
        async mandaQueijo() {
            const novoQueijo = {
                nomeQueijo: this.queijo
            }

            try {
                const res = await fetch("http://localhost:8085/cadastrar/queijo", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(novoQueijo)
                })

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                this.queijo = ""
                this.$router.push("/ingredientes")
            } catch(err) {
                console.error(err)
            }
        }
    }
}
</script>

<style>
.queijoControl {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
</style>