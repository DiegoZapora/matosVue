<template>
    <div class="cadContainer">
        <h1>Cadastrar Ingrediente</h1>
        <p>Selecione o Ingrediente que deseja Cadastrar</p>
        <ul class="cadUl">
            <li class="cadLI"><RouterLink to="/cadastrar/pao">Pão</RouterLink></li>
            <li class="cadLI"><RouterLink to="/cadastrar/queijo">Queijo</RouterLink></li>
            <li class="cadLI"><RouterLink to="/cadastrar/carne">Carne</RouterLink></li>
            <li class="cadLI"><RouterLink to="/cadastrar/adicionais">Adicionais</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.cadContainer {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.cadContainer h1 {
    margin: 0px;
}

.cadUl {
    display: flex;
    flex-direction: column;
    height: 200px;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin-top: 25px;
}

.cadLI a {
    text-decoration: none;
    color: #FCBA03;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    background-color: #222;
    transition: .5s;
}

.cadLI a:hover {
    background-color: white;
    color: #222;
}
</style>