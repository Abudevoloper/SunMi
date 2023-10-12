<script setup>

</script>

<template>
    <div class="container">
        <h1>
            SunMi
        </h1>
        <div class="navbar">
            <h4><router-link to="/open-car"> 차량점검내용</router-link></h4>
            <h4> <router-link to="/open-history"> 저장된 내용보기</router-link></h4>
            <h4><router-link to="/open-product"> 완제품출고 의뢰내용</router-link></h4>
            <h4><router-link to="/create-product"> 완제품출고 의뢰서</router-link></h4>
            <h4><router-link to="/open-category"> 거래처 및 제품 관리</router-link></h4>
        </div>





    </div>

</template>

<style scoped>
.navbar {
    display: inline-block;
    text-align: center;
    text-decoration: none;
}
h4 {

    margin-bottom: 50px;
}
h1 {
    color: #000000;
    position: absolute;
    top: 50px;
    font-family: "Droid Sans Mono Dotted", sans-serif;
    font-size: 3em;
}


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    height: 1000px;
    background-image: url("../assets/SunMi.com.jpg");
}



button {
    background: rgba(139, 141, 141, 0.66);
    border: none;
    color: black;
}
button:hover {
    color: #111010;
    font-family: "Droid Sans Mono Dotted",sans-serif;
}

a {
    border-radius: 8px;
    margin: 2px;
    border: 1px solid #6eff1f;
    color: #020202;
    padding: 10px;
    text-decoration: none;
    font-family: sans-serif;
    box-shadow: 2px 2px 6px #20231f;
}

a:hover {
    border: yellow 1px solid;
    color: #20231f;
    background: #47e16d;
}
</style>