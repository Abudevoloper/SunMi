<script setup>

</script>

<template>
    <div class="container">
        <h1>
            SunMi
        </h1>
        <div class="row">
            <div class="col-12 col-sm-12">

                    <router-link to="/open-car"> 차량점검내용</router-link>

            </div>
            <div class="col-12 col-sm-12">

                    <router-link to="/open-product"> 완제품 출고의뢰서</router-link>

            </div>
            <div class="col-12 col-sm-12">

                    <router-link to="/open-history"> 저장된 내용보기</router-link>

            </div>

        </div>


        <br>


    </div>

</template>

<style scoped>
h1 {
    color: #def6ed;
    position: absolute;
    top: 50px;
    font-family: sans-serif;
    font-size: 2.5em;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 900px;
    width: 100%;
    background-image: url("../assets/1871775.jpg");
}
.col-12 {
    font-size: 1.5em;
    text-align: center;
    margin-top: 50px;
}

a {
    margin: 2px;
    border: 1px solid #6eff1f;
    color: #def6ed;
    padding: 5px;
    text-decoration: none;
    font-family: sans-serif;
    box-shadow: 2px 2px 6px #f10520;
}

a:hover {
    border: yellow 1px solid;
    color: red;
}
</style>