<template>
    <Transition name="fade">
        <div class="msgContainer">
            <p>{{ mensagem }}</p>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "Msg",
    props: {
        mensagem: String
    }
}
</script>

<style scoped>
    .msgContainer {
        color: #004085;
        background-color: #CCE5FF;
        border: 2px solid #B8DAFF;
        border-radius: 5px;
        padding: 10px;
        width: 400px;
        margin: 30px auto;
    }
</style>