<template>
    <div class="selectControl">
        <label :for="forS">{{ textoS }}</label>
        <select :name="nameS" :id="idS">
            <option value="0">{{ selectTxt }}</option>
            <option></option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SelectCad",
    props: {
        forS: String,
        textoS: String,
        nameS: String,
        idS: String,
        selectTxt: String,
        valueS: Number,
        valueTxt: String
    }
}
</script>

<style scoped>

</style>