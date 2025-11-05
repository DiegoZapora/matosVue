<template>
    <form class="adicControl" @submit.prevent="mandaAdic()">
        <InputCad forText="Adicional" texto="Cadastrar Adicional" tipo="text" placeholderF="Digite o Adicional" idF="adicional"
            nameF="adicional" v-model="adicional" />

        <SubmitBtn btnText="Cadastrar Adicional" />
    </form>
</template>

<script>
import InputCad from '@/components/InputCad.vue';
import SubmitBtn from '@/components/SubmitBtn.vue';

export default {
    data() {
        return {
            adicional: ""
        }
    },
    components: {
        InputCad,
        SubmitBtn
    },
    methods: {
        async mandaAdic() {
            const novoAdicional = {
                nome: this.adicional
            }
            const API_URL = import.meta.env.VITE_API_URL || process.env.VUE_APP_API_URL
            try {
                const res = await fetch(`${API_URL}/cadastrar/adicional`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(novoAdicional)
                })

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                this.adicional = ""
                this.$router.push("/ingredientes")
            } catch(err) {
                console.error(err)
            }
        }
    }
}
</script>

<style scoped>
.adicControl {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
</style>