<template>
    <div class="inputControl">
        <label :for="forText">{{ texto }}</label>
        <input :type="tipo" :placeholder="placeholderF" :id="idF" :name="nameF" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script>
export default {
    name: "InputCad",
    props: {
        forText: String,
        texto: String,
        tipo: String,
        placeholderF: String,
        idF: String,
        nameF: String,
        modelValue: String
    }
}
</script>

<style scoped>
.inputControl {
    display: flex;
    flex-direction: column;
}

.inputControl input {
    width: 300px;
    margin-bottom: 10px;
    padding: 5px;
}

.inputControl label {
    font-weight: bold;
    margin-bottom: 15px;
    padding-left: 5px;
    color: #222;
    border-left: 4px solid #FCBA03;
}
</style>