

<template>
    <div class="container text-center">
        <router-link to="/exit">
            <button class="exit"> Close</button>
        </router-link>
        <h1>
            차량 점검내용
        </h1>
        <form class="car-test">
            앤진오일은 정상인가요? 예 <input type="radio" value="on" name="oil"> 아니요 <input type="radio" value="off"
                                                                                 name="oil"><br>
            차 소모품은 잘 재워져 있는가? 예 <input type="radio" value="on" name="water"> 아니요 <input type="radio" value="off"
                                                                                        name="water"><br>
            계기판은 정상작동하는가? 예 <input type="radio" value="on" name="monitor"> 아니요 <input type="radio" value="off"
                                                                                      name="monitor"><br>
            온도기록지 정상인가요? 예 <input type="radio" value="on" name="printer"> 아니요 <input type="radio" value="off"
                                                                                     name="printer"><br>
            타이어 점검하였는가?? 예 <input type="radio" value="on" name="tire"> 아니요 <input type="radio" value="off"
                                                                                  name="tire"><br>
            차량 내외 청소하였는가? 예 <input type="radio" value="on" name="clean"> 아니요 <input type="radio" value="off"
                                                                                    name="clean"><br>
            차량운행이 가능한가? 예 <input type="radio" value="on" name="driver"> 아니요 <input type="radio" value="off"
                                                                                   name="driver"><br>
            <input class="mb-2" type="submit">
        </form>

        <form @submit.prevent="send">


            운행날짜: <input type="text" placeholder="date" v-model="newHistory.cartest"><br>
            <input type="text" class="col-3" placeholder="다음 운행시 주의사항" v-model="this.newHistory.nextdrivertime"><br>
            출발 시간: <input class="text" type="time" placeholder=" 출발 시간" v-model="newHistory.start"><br>
            회사 도착시간: <input class="text" type="time" placeholder="회사 도착시간" v-model="newHistory.finish"><br>
            <input class="text" placeholder=" 운행 목적" v-model="newHistory.driverplan" ><br>
            <input class="text" placeholder=" 운행시간" v-model="newHistory.todaydrivertime"><br>
            <input class="text" placeholder="운행전 km" v-model="newHistory.lastkm"><br>
            <input class="text" placeholder=" 주행후 km" v-model="newHistory.nextkm"><br>
            <input class="text" placeholder=" 주유금액" v-model="newHistory.disel"><br>

            <input class="text-next-drive-time col-3" type="text" placeholder="다음 운행시 주의사항 및 점검예상사항" v-model="newHistory.drivergoodday"><br>

            <button class="mt-2">
                저장하기
            </button>

        </form>

    </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
    name: "CarPage",
    methods: {
        ...mapActions(['pushHistory']),
        send() {

            if (this.newHistory.cartest && this.newHistory.start && this.newHistory.finish && this.newHistory.driverplan && this.newHistory.todaydrivertime
                && this.newHistory.lastkm && this.newHistory.nextkm && this.newHistory.disel && this.newHistory.drivergoodday && this.newHistory.nextdrivertime !== '') {

                this.pushHistory({
                    start: this.newHistory.start,
                    finish: this.newHistory.finish,
                    driverplan: this.newHistory.driverplan,
                    todaydrivertime: this.newHistory.todaydrivertime,
                    lastkm: this.newHistory.lastkm,
                    nextkm: this.newHistory.nextkm,
                    disel: this.newHistory.disel,
                    cartest: this.newHistory.cartest,
                    nextdrivertime: this.newHistory.nextdrivertime,
                    drivergoodday: this.newHistory.drivergoodday,

                })
                    .then(() => {
                        this.$router.push('/open-history')
                        alert("오늘의 사항 추가되었습니다")
                    })
            } else {
                alert('추가 내용이 올바르지 않습니다')
            }
        }
    },
    data() {
        return {
            newHistory: {
                start: "",
                finish: "",
                driverplan: "",
                todaydrivertime: "",
                lastkm: "",
                nextkm: "",
                disel: "",
                cartest: "",
                nextdrivertime: "",
                drivergoodday: "",
            }
        }

    },
}

</script>

<style scoped>

.container {
    border: 2px solid black;
}

input {

    margin-top: 20px;
}

.car-test {
    border: 1px black dashed;
}

.text-next-drive-time {
    width: 300px;
    height: 100px;
}

button.exit {
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