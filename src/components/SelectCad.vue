<template>
    <div class="selectControl">
        <label :for="forS">{{ textoS }}</label>
        <select :name="nameS" :id="idS">
            <option value="">{{ selectTxt }}</option>
            <option :value="valueS">{{ valueTxt }}</option>
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
.selectControl {
    display: flex;
    flex-direction: column;
}

.selectControl select {
    width: 300px;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;
}

.selectControl label {
    font-weight: bold;
    margin-bottom: 15px;
    padding-left: 5px;
    color: #222;
    border-left: 4px solid #FCBA03;
}
</style>