<template>
    <div>
        <InputCad for="Pao" nome="Tipo do Pão:" type="text" placeholder="Digite o Tipo do Pão" tipo="submit" texto="Cadastrar" />
    </div>
</template>

<script>
import InputCad from '@/components/InputCad.vue';

export default {
    components: {
        InputCad
    },
}
</script>