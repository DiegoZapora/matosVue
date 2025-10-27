<template>
    <div id="nav">
        <RouterLink to="/">
            <img src="" alt="logo" id="logo">
        </RouterLink> /
        <RouterLink to="/">Home</RouterLink> /
        <RouterLink to="/pedidos">Pedidos</RouterLink> /
        <RouterLink to="/ingredientes">Ingredientes</RouterLink>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>