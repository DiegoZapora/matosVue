<template>
    <Banner />
    <div class="mainContainer">
        <h1>Bem-Vindo</h1>
        <p style="text-align: center;">Monte o seu Burguer</p>
        <BurguerForm />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import BurguerForm from '@/components/BurguerForm.vue';

export default {
    components: {
        Banner,
        BurguerForm
    }
}
</script>