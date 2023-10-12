<template>
    <div class="container d-flex justify-content-center text-center ">


        <div class="create-information-page ">

            <router-link to="/" class="d-flex justify-content-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill mt-2" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>

            </router-link>
            <h3 class="mt-3">
                차량 점검내용
            </h3>

            <form @submit.prevent="send">

                오늘날짜: <input class="text" type="date" v-model="newHistory.driverday" required><br>
                출발 시간: <input class="text" type="time" placeholder=" 출발 시간" v-model="newHistory.start" required><br>
                회사 도착시간: <input class="text" type="time" placeholder="회사 도착시간" v-model="newHistory.finish"><br>
                총 운행시간: <input type="text" placeholder="총 운행시간" v-model="newHistory.fulldrivetime"><br>
                운행 목적: <input class="text" placeholder=" 운행 목적" v-model="newHistory.driverplan" required ><br>
                주행전 (km): <input class="text" placeholder="운행전 km" v-model="newHistory.lastkm" required><br>
                주행후 (km): <input class="text" placeholder=" 주행후 km" v-model="newHistory.nextkm"><br>
                주유금액: <input class="text" placeholder=" 주유금액" v-model="newHistory.disel"><br>
                <input class="text-next-drive-time col-3" type="text" placeholder="다음 운행시 주의사항 및 점검예상사항"
                       v-model="newHistory.drivergoodday"><br>
                <input class="text" type="submit" value="저장하기"><br>

            </form>

        </div>
    </div>
</template>
<script type="javascript">
import {mapActions} from "vuex";


export default {
    name: "CarPage",
    data() {
        return {
            newHistory: {
                driverday: "",
                start: "",
                finish: "",
                driverplan: "배송",
                lastkm: "km",
                nextkm: "km",
                disel: "만 천원",
                fulldrivetime: "시간 분",
                drivergoodday: "",

            },

        }

    },

    methods: {
        ...mapActions(['pushHistory']),
        send() {
            {
                this.pushHistory({
                    driverday: this.newHistory.driverday,
                    fulldrivertime: this.newHistory.fulldrivetime,
                    start: this.newHistory.start,
                    finish: this.newHistory.finish,
                    driverplan: this.newHistory.driverplan,
                    lastkm: this.newHistory.lastkm,
                    nextkm: this.newHistory.nextkm,
                    disel: this.newHistory.disel,
                    drivergoodday: this.newHistory.drivergoodday


                })
                    .then(() => {
                        this.$router.push('/open-history')
                        alert("오늘의 사항 추가되었습니다")
                    })
            }

        },
    }

}

</script>

<style scoped>

svg {
    margin-left: 10px;
    border-radius: 50%;
    background: #2d2d2d;
    color: #fff;
}
svg:hover{
    border-radius: 50%;
    background: #fff;
    color: #2d2d2d;
}
.create-information-page {
    margin-top: 40px;
    border: 1px solid #284127;
    width: 360px;
    height: 800px;
}

.quesen {
    border: 1px dashed #0a0a0a;
}

.carsubmit {
    padding: 4px;
    color: #fff;
    width: 100%;
    background: #625858;


}
.carsubmit:hover {
    background: #aafa34;
    color: black;
}

.mt-5:hover {
    border-radius: 10px;
    color: red;
    background: none;
    border: 1px dashed #e0852e;
}

input {
    border-radius: 5px;
    text-align: center;
    margin-top: 30px;
}

.carcheck {
    padding: 0;
    font-size: 2em;
}

.text-next-drive-time {
    width: 300px;
    height: 100px;
}

button.exit {
    font-family: "Droid Sans Mono Dotted", serif;
    top: 5px;
    color: #000000;
    position: absolute;
    left: 10px;
    border-radius: 10px;
    border: 1px solid red;
    background: none;


}

button.exit:hover {
    background: #a0ec77;
    color: #0a0a0a;
}

</style>