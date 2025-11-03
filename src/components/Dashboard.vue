<template>
    <div class="burguerTable">
        <div>
            <ul class="tableHeading">
                <li class="orderId">#</li>
                <li>Cliente: </li>
                <li>Pão: </li>
                <li>Carne: </li>
                <li>Queijo: </li>
                <li>Adicionais: </li>
                <li>Ações: </li>
            </ul>
        </div>
        <div class="burguerRows">
            <ul class="burguerRow">
                <li class="orderNumber">1</li>
                <li>Samp</li>
                <li>Pao</li>
                <li>Carne</li>
                <li>Queijo</li>
                <ul>
                    <li>Salame</li>
                    <li>Tomate</li>
                </ul>
                <select name="status" class="status">
                    <option value="">Status</option>
                </select>
                <button class="deleteBtn">Cancelar Pedido</button>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>

<style scoped>
 .burguerTable {
    max-width: 1200px;
    margin: 0 auto;
 }

 .tableHeading, .burguerRows, .burguerRow {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
 }

 .tableHeading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
 }

 .tableHeading li, .burguerRow li {
    width: 19%;
 }

 .burguerRow {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
 }

 .burguerTable .orderId, .burguerRow .orderNumber {
    width: 5%;
 }

</style>