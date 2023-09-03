<script setup>

</script>

<template>
    <router-link to="/exit">
        <button class="exit"> Close </button>
    </router-link>
    <table class="table mt-5">
        <thead>
        <tr>
            <th scope="col">No</th>
            <th scope="col">날짜</th>
            <th scope="col">출발</th>
            <th scope="col">도착</th>
            <th scope="col">운행목적</th>
            <th scope="col">운행시간</th>
            <th scope="col">주행전 (km)</th>
            <th scope="col">주행후 (km)</th>
            <th scope="col">주유금액</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
        </tr>

        </tbody>
    </table>
</template>

<style scoped>
button.exit {
    top:5px;
    color: #000000;
    position: absolute;
    left:10px;
    border-radius: 10px;
    border: 1px solid red;
    background: none;

}
button.exit:hover {
    background: #a0ec77;
    color: #0a0a0a;
}

</style>