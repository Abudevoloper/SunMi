<template>
    <div class="product-page mt-5">
        <div class="row">
            <div class="col-9"><h2>완 제 품 출 고 의 뢰 서 / <a> 차량운행일지 </a></h2></div>
            <div class="col-1"><strong> 작성 </strong>
                <hr>
            </div>
            <div class="col-1"><strong> 검토 </strong>
                <hr>
            </div>
            <div class="col-1"><strong> 승인 </strong>
                <hr>
            </div>
            <br>
        </div>
        <div class="row m-0 p-0">
            <div class="col-4">출고일 :</div>
            <div class="col-4">작성자 :</div>
            <div class="col-4">차량번호 :</div>
        </div>
        <div class="right-table">
            <form @submit.prevent="flyproduct">
                <table class="position-relative border-1">
                    <thead>
                    <tr>
                        <th class="product-th-border" scope="col"><p>거래처</p></th>
                        <th class="product-th-border" scope="col"><p>폼목</p></th>
                        <th class="product-th-border" scope="col"><p>수량(kg)</p></th>
                        <th class="product-th-border" scope="col"><p>제조일</p></th>
                        <th class="product-th-border" scope="col"><p>배송일</p></th>
                        <th class="product-th-border" scope="col"><p>박스 수거량</p></th>
                        <th class="product-th-border" scope="col"><p>반품/미배송</p></th>
                        <th class="product-th-border" scope="col"><p>특이 사항</p></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td >
                            <select v-model="newProduct.categoryId">
                                <option value="/api/categories/1">무주하나로</option>
                                <option value="/api/categories/2">영동유치원</option>
                            </select>
                        </td>

                        <td>
                            <select  aria-label="Default select example" v-model="newProduct.producttype">
                                <option>포/국</option>
                            </select>
                        </td>
                        <td><input type="text" v-model="newProduct.kg"></td>
                        <td><input type="date" v-model="newProduct.indate"></td>
                        <td><input type="date" v-model="newProduct.outdate"></td>
                        <td><input type="text" v-model="newProduct.boxin"></td>
                        <td><input type="text" v-model="newProduct.productin"></td>
                        <td><input type="text" v-model="newProduct.goodday"></td>
                        <button class="saving-button">등록하기</button>

                    </tr>

                    </tbody>

                </table>
            </form>
        </div>
    </div>


    <div class="bottom-box">
        <h6 class="background-fixed ">
            운행중 차량 특이사항:
        </h6>

        <p class="p-3 m-2"><strong> </strong> <br></p>
    </div>

</template>
<script>

import {mapActions} from "vuex";

export default {
    name: "ProductPage",
    data() {
        return {
            newProduct: {
                buyperson: "",
                producttype: "",
                kg: " kg",
                indate: "",
                outdate: "",
                boxin: " 개",
                productin: " 없음",
                goodday: "",
                categoryId: ""
            }
        }
    },
    methods: {
        ...mapActions(['pushProduct']),

        flyproduct() {
                this.pushProduct({
                    buyperson: this.newProduct.buyperson,
                    producttype: this.newProduct.producttype,
                    kg: this.newProduct.kg,
                    indate: this.newProduct.indate,
                    outdate: this.newProduct.outdate,
                    boxin: this.newProduct.boxin,
                    productin: this.newProduct.productin,
                    goodday: this.newProduct.goodday,

                })

                    .then(() => {
                        this.$router.push('/open-product')
                        alert("오늘의 사항 추가되었습니다")
                    })
            }
    },

}
</script>


<style>
/*
let location = ["무주군", "보은군"];
let muju = ["무주하나로", "무주군청국내식당"];
let boen = ["판동초", "보은중생고"];
let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

location.forEach(function addSpecies(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});
slct1.onchange = function () {
    slct2.innerHTML = "<option></option>";
    if (this.value === "무주군") {
        addToSlct2(muju);
    }
    if (this.value === "영동군") {
        addToSlct2(boen);
    }

}

function addToSlct2(arr) {
    arr.forEach(function (item) {
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        slct2.appendChild(option);
    });
}
*/


strong {
    margin-top: 10px;
}

.saving-button {
    position: fixed;
    top: 152px;
    left: 1220px;
    background: #284127;
    border-radius: 5px;
    color: white;
    font-size: 2rex;
}

.saving-button:hover {
    background: white;
    color: black;
}

input {
    width: 120px;
    padding: 3px;
    text-align: center;
}
select {
    width: 120px;
    padding: 4px;
}

a {
    font-size: 20px;
}

.col-9 {
    margin: 0;
    display: inline-block;
    border: 1px solid #2d2d2d;
    padding: 0;
    left: 11px;
    position: relative;
    width: 73%;
    background: #b6d1e3;
    height: 60px;
}

.col-4 {
    font-size: 15px;
    text-align: left;
    bottom: 40px;
    margin: 0;
    border: 1px solid #2d2d2d;
    padding: 7.5px;
    width: 24.8%;
    position: relative;
}

.col-1 {
    position: relative;
    left: 11px;
    height: 100px;
    border: 1px solid #2d2d2d;
    padding: 0;
    margin: 0;

}

.position-relative {

}


/* The scrollable part */

.right-table {
    max-height: 500px;
    overflow-y: scroll;
    position: relative;
    bottom: 39px;
    border-bottom: 1px solid #ddd;
}


.product-td-border {
    border: 1px solid #2d2d2d;
    padding: 2px;
}

tr {
    padding: 0;

}

.product-th-border {
    border: 1px solid #2d2d2d;
    padding: 5px;

}

.product-page {
    margin-left: 120px;
    height: 600px;
    border-left: 1px solid #2d2d2d;
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

.background-fixed {
    background: white;
    border-bottom: 1px  solid #284127;
    position: fixed;
    width: 1195px;


}

p {

    height: 20px;
    display: inline;
    color: #0a0a0a;


}

.bottom-box {
    text-align: center;
    display: block;
    overflow-y: scroll;
    position: absolute;
    background: white;
    margin-left: 120px;
    justify-items: end;
    width: 1200px;
    border: 3px solid #2d2d2d;
    height: 150px;
}
</style>