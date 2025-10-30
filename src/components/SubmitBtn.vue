<template>
    <div class="btnControl">
        <input type="submit" :value="btnText">
    </div>
</template>

<script>
export default {
    name: "SubmitBtn",
    props: {
        btnText: String
    }
}
</script>

<style scoped>
.btnControl {
    margin: 0 auto;
}

.btnControl input {
    background-color: #222;
    color: #FCBA03;
    border: 2px solid #222;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    transition: .5s;
}

.btnControl input:hover {
    background-color: transparent;
    color: #222;
}
</style>