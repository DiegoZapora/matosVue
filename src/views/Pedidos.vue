<template>
    <div class="mainContainer">
       <h1>Gerenciar Pedidos: </h1>
       <Dashboard />
    </div>
</template>

<script>
import Msg from '@/components/Msg.vue';
import Dashboard from '@/components/Dashboard.vue';

export default {
    components: {
        Msg,
        Dashboard
    }
}
</script>