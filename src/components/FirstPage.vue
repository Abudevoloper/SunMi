<script>
</script>

<template>
    <div class="container">
        <h1>
            SunMi
        </h1>
        <div class="navbar ">
            <router-link  to="/open-car"> 차량점검내용</router-link><br><br>
            <router-link to="/open-history"> 차량점검내용 보기</router-link><br><br>
           <router-link to="/open-product"> 완제품출고 의뢰내용</router-link><br><br>
           <router-link to="/create-product"> 완제품출고 의뢰서</router-link><br><br>
            <router-link to="/open-category"> 거래처 및 제품 관리</router-link><br><br>
        </div>
    </div>

</template>

<style scoped>
.navbar {
    width: 200px;
    text-align: center;
    text-decoration: none;
}
h4 {
    margin-bottom: 40px;
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
    height: 900px;
    background-image: url("../assets/SunMi.com.jpg");
}


a {
    width: 200px;
    border-radius: 5px;
    color: #020202;
    padding: 6px;
    text-decoration: none;
    font-family: sans-serif;
    box-shadow: 2px 2px 6px #20231f;
    background: #b3d986;
}

a:hover {
    background: #2d2d2d;
    margin-top: 2px;
    color: #def6ed;
}
</style>