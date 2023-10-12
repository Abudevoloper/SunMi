<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "SavingInformation",
    methods: {
        ...mapActions(['fetchHistory']),

    },
    computed: {
        ...mapGetters(['getHistory']),
    },

    mounted() {
        console.log('저장 내용을 찾았습니다')

        this.fetchHistory(this.$route.params.id)

    },
    watch: {
        "$route.params.id"() {
            this.fetchHistory(this.$route.params.id)

        }
    }
}
</script>

<template>
    <h2 class="mt-5"> 차량 점검내용</h2>
    <div class="right-box">
        <div class="row-left">
            <div class="col-12 col-md-12 col-xl-12"><strong>차량 점검내용</strong></div>
            <div class="col-12 col-md-12 col-xl-12">엔진오일은 정상인가?</div>
            <div class="col-12 col-md-12 col-xl-12">차량소모품은 정상적으로 <br>채워져 있는가?</div>
            <div class="col-12 col-md-12 col-xl-12">계기판은 정상작동하는가?</div>
            <div class="col-12 col-md-12 col-xl-12">온도기록지 정상작동하는가?</div>
            <div class="col-12 col-md-12 col-xl-12">타이어 점검하였는가?</div>
            <div class="col-12 col-md-12 col-xl-12">차량 내외 청소하였는가?</div>
            <div class="col-12 col-md-12 col-xl-12">차량운행이 가능한가?</div>
            <div class="col-12 col-md-12 col-xl-12"></div>
            <div class="col-12 col-md-12 col-xl-12"></div>
            <div class="col-12 col-md-12 col-xl-12"></div>
            <div class="col-12 col-md-12 col-xl-12"></div>

        </div>
        <div class="row-center">
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><strong>상태</strong></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3>O</h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-center" class="col-12 col-md-12 col-xl-12"><h3></h3></div>

        </div>
        <div class="row-right">
            <div id="row-right-1" class="col-12 col-md-12 col-xl-12"><strong>다음운행시 주의사항 및 <br> 점검예정사항</strong></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>
            <div id="row-right" class="col-12 col-md-12 col-xl-12"><h3></h3></div>

        </div>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col"><p>날짜</p></th>
                <th scope="col"><p>출발</p></th>
                <th scope="col"><p>도착</p></th>
                <th scope="col"><p>운행목적</p></th>
                <th scope="col"><p>운행시간</p></th>
                <th scope="col"><p>주행전 km</p></th>
                <th scope="col"><p>주행후 km</p></th>
                <th scope="col"><p>주유금액</p></th>


            </tr>
            </thead>
            <tbody  v-for="sun_mi_car  of getHistory"
                    v-bind:key="sun_mi_car" class="tbody" >
            <tr>
                <td><p>{{ sun_mi_car.driverday }}</p></td>
                <td><p>{{ sun_mi_car.start }}</p></td>
                <td><p>{{ sun_mi_car.finish }}</p></td>
                <td><p>{{ sun_mi_car.driverplan }}</p></td>
                <td><p>{{ sun_mi_car.fulldrivertime }}</p></td>
                <td><p>{{ sun_mi_car.lastkm }}</p></td>
                <td><p>{{ sun_mi_car.nextkm }}</p></td>
                <td><p>{{ sun_mi_car.disel }}</p></td>
            </tr>

            </tbody>
        </table>
    </div>
    <div class="bottom-box">
        <h6>
            운행중 차량 특이사항
        </h6>
        <p v-for="sun_mi_car  of getHistory"
           v-bind:key="sun_mi_car" data-bs-spy="scroll"> </p>
    </div>


</template>

<style>



.table-bordered {
    position: relative;
    width: 58.5%;
    margin-left: 41.2%;


}

.row-left {
    position: absolute;
}

.row-center {
    position: absolute;
    margin-left: 180px;
}

#row-center {
    width: 100px;
}
#row-right {
    width: 196px;
    border: none;
}
#row-right-1 {
    border-bottom: 1px solid #2d2d2d;
    width: 198px;
}

.row-right {
    border-right: 2px solid #2d2d2d;
    position: absolute;
    margin-left: 279px;
}

.col-12 {
    height: 50px;
    padding: 7.5px;
    width: 180px;
    border: 1px solid #757474;
}

tr {
    margin: 8px;
    padding: 0;
}

th {
    padding: 10px;
    margin: 0;
}

.right-box {
    max-height: 600px;
    display: block;
    overflow-y: scroll;
    margin-left: 120px;
    height: 600px;
    border-right: 3px solid #2d2d2d;
    border-top: 2px solid #2d2d2d;
    width: 1200px;
    left: 100px;
    padding: 0;
    text-align: center;
    font-size: 13px;
}

h5 {
    border-top: 3px solid #2d2d2d;
}

h2 {
    margin-left: 130px;
    margin-bottom: 30px;
}

h6 {
    text-align: center;
    border-bottom: 1px solid #2d2d2d;
}

p {
    margin: 0;
    color: #0a0a0a;
    text-align: center;
}
.bottom-box {
    position: absolute;
    background: white;
    margin-left: 120px;
    justify-items: end;
    width: 1200px;
    border: 3px solid #2d2d2d;
    height: 150px;

}
</style>