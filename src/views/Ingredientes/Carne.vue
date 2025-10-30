<template>
    <form class="carneControl" @submit.prevent="mandaCarne()">
        <InputCad forText="carne" texto="Cadastrar Carne" tipo="text" placeholderF="Digite o nome da Carne" idF="carne" nameF="carne" v-model="carne"/>

        <SubmitBtn btnText="Cadastrar Carne" />
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
            carne: ""
        }
    },
    methods: {
        async mandaCarne() {
            const novaCarne = {
                nomeCarne: this.carne
            }

            try {
                const res = await fetch("http://localhost:8085/cadastrar/carne", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(novaCarne)
                })

                if (!res.ok) {
                    throw new Error(`Erro: ${res.status}`)
                }

                this.carne = ""
                this.$router.push("/ingredientes")
            } catch (err) {
                console.error(err)
            }
        }
    }
}
</script>

<style>
.carneControl {
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
</style>