<template>
    <div>
        <InputCad for="queijo" nome="Tipo do Queijo:" type="text" placeholder="Digite o tipo do queijo" tipo="submit" texto="Cadastrar" />
    </div>
</template>

<script>
import InputCad from '@/components/InputCad.vue';

export default {
    components: {
        InputCad
    }
}
</script>