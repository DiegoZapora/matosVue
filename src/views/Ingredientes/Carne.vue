<template>
    <form>
        <InputCad forText="carne" texto="Tipo da Carne: " tipo="text" placeholder="Digite o nome da Carne"/>
    </form>
</template>

<script>
import InputCad from '@/components/InputCad.vue';

export default {
    components: {
        InputCad
    }
}
</script>