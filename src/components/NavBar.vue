<template>
    <div id="nav">
        <RouterLink to="/">
            <img :src="logo" :alt="appName" id="logo" class="logoImg">
        </RouterLink>
        <ul class="naviga">
            <li class="navLink">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="navLink">
                <RouterLink to="/pedidos">Pedidos</RouterLink>
            </li>
            <li class="navLink">
                <RouterLink to="/ingredientes">Ingredientes</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: ["logo", "appName"]
}
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: rgba(182, 112, 8, 0.774);
    font-size: 14px;
}

.naviga {
    width: auto;
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin-right: 10px;
}

.navLink {
    background-color: white;
    padding: 5px;
    border-radius: 4px;
    transition: .5s;
    margin: 10px;
}

.navLink a{
    text-decoration: none;
    color: black;
    transition: .5s;
}

.navLink:hover {
    scale: 1.1;
}

.logoImg {
    width: 80px;
    border-radius: 50%;
    margin-left: 5px;
}

.logoImg:hover {
    scale: 1.1;
    transition: 1.8s;
    transform: rotateX(360deg);
}
</style>
