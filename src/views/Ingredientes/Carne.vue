<template>
    <div>
        <InputCad for="carne" nome="Tipo da Carne: " type="text" placeholder="Digite o nome da Carne" tipo="submit" texto="Cadastrar"/>

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