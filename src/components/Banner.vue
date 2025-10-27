<template>
    <div class="banner">
        <h1>Matos Burguer</h1>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style>
.banner {
    background-image: url("../../public/banner.png");
    background-size: cover;
    background-position: 0;
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.banner h1 {
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

@media screen and (max-width: 700px) {
    .banner h1 {
        font-size: 30px;
    }
}
</style>