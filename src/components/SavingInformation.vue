<script>
import "../vuex/saving.js"
import {mapActions, mapGetters} from "vuex";
export default {
    name: "SavingInformation",
    methods: {
        ...mapActions(['fetchHistory']),
        ...mapActions(['searchCarInfo']),
        searchSunMiCar(reject) {
            this.searchCarInfo(this.form.searchSunMiCar)
                .then(() => {
                    this.$router.push('/open-history')
                })

                .catch(() => {
                    console.log('선택한 날짜로 저장내용이 없습니다');
                    reject();

                })
        },
    },
    data() {
        return {
            form: {
                searchSunMiCar: "",
            },
        }

    },
    computed: {
        ...mapGetters(['getHistorySearch']),
    },

}
</script>

<template>
    <div id="openHistory">

        <h4 class="mt-5"> 차량 점검내용</h4>
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
                <div id="row-right" class="col-12 col-md-12 col-xl-12">
                    <p
                        v-for="sun_mi_car  of getHistorySearch"
                        v-bind:key="sun_mi_car">
                        {{ sun_mi_car.drivergoodday }}
                    </p><br>
                </div>
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
                <tbody v-for="sun_mi_car  of getHistorySearch"
                       v-bind:key="sun_mi_car"
                       class="tbody">
                <tr>
                    <td class="border"><p class="border-1">{{ sun_mi_car.driverday }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.start }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.finish }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.driverplan + '배송' }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.fulldrivertime }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.lastkm }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.nextkm }}</p></td>
                    <td class="border"><p class="border-1">{{ sun_mi_car.disel }}</p></td>
                </tr>

                </tbody>
            </table>
        </div>
        <div class="bottom-box">
            <h6>
                운행중 차량 특이사항
            </h6>
            <p></p>
        </div>
    </div>
    <form class="search-sun_mi_car-form" @submit.prevent="searchSunMiCar">
        <input class="form-control w-50" type="date" placeholder="Search" v-model="form.searchSunMiCar">
        <input class="btn btn-outline-success p-1  m-1" type="submit" value="검색하기">
    </form>
    <button class="download-button position-relative" id="download">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download"
             viewBox="0 0 16 16">
            <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        다운로드
    </button>

</template>

<style>
.download-button {
    top: -20px;
    width: 140px;
    margin-left: 380px;
    border-radius: 8px;
    border: 0;
    padding: 8px;
}

.download-button:hover {
    background: #a0ec77;
    color: black;
}

.search-sun_mi_car-form {
    display: flex;
    width: 280px;
    position: relative;
    left: 120px;
    bottom: 35px;
    top: 20px;
}


.table-bordered {
    position: relative;
    width: 59.8%;
    margin-left: 40.1%;


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
    border-bottom: 1px solid #070707;
    width: 198px;
}

.row-right {
    border-right: 2px solid #030303;
    position: absolute;
    margin-left: 279px;
}

.col-12 {
    padding-top: 5px;
    height: 50px;
    width: 180px;
    border: 1px solid #757474;
}

th {
    margin: 0;
}

.right-box {
    margin-left: 120px;
    height: 560px;
    border-right: 3px solid #100e0e;
    border-top: 2px solid #0c0a0a;
    border-left: 2px solid #090808;
    width: 1200px;
    padding: 0;
    text-align: center;
    font-size: 13px;
}

h5 {
    border-top: 3px solid #090707;
}

h4 {
    margin-left: 130px;
    margin-bottom: 30px;
}

h6 {
    text-align: center;
    border-bottom: 1px solid #020101;
}

p {
    padding: 0;
    margin: 0;
    color: #0a0a0a;
    text-align: center;
}

.bottom-box {
    position: relative;
    background: white;
    margin-left: 120px;
    justify-items: end;
    width: 1200px;
    border: 3px solid #0e0b0b;
    height: 150px;

}
</style>