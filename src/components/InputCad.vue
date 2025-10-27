<template>
    <form class="InpCad">
        <label :for="for">{{ nome }}</label>
        <input :type="type" :placeholder="placeholder">
        <button :type="tipo">{{ texto }}</button>
    </form>
</template>

<script>
export default {
    name: "InputCad",
    props: {
        for: String,
        nome: String,
        type: String,
        placeholder: String,
        tipo: String,
        texto: String
    }
}
</script>

<style>
 .InpCad{
    display: flex;
    flex-direction: column;
    width: 50%;
 }
</style>