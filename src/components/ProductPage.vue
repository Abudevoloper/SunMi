<script>
import "../vuex/productdownload.js"
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductPage",
    methods: {
        ...mapActions(['searchProducts']),
        searchProduct() {
            this.searchProducts(this.form.searchProduct)
                .then(() => {
                    this.$router.push('/open-product')
                })

        }
    },

    data() {
        return {
            form: {
                searchProduct: "",
            }
        }
    },
    computed: {
        ...mapGetters(['getProductSearch']),
        ...mapGetters(['getHistory']),
    },

}


</script>

<template>
    <div id="myPage">


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
                <div class="col-4"> 출고일 : <strong>{{}}</strong></div>
                <div class="col-4">작성자 :</div>
                <div class="col-4">차량번호 :</div>
            </div>
            <div class="right-table">

                <table class="position-relative border-1">
                    <thead>
                    <tr>
                        <th class="product-th_border" scope="col"><p class="p-tag">거래처</p></th>
                        <th class="product-th_border" scope="col"><p class="p-tag">폼목</p></th>
                        <th class="product-th_border" scope="col"><p class="p-tag">수량(kg)</p></th>
                        <th class="product-th_border" scope="col"><p class="p-tag">제조일</p></th>
                        <th class="product-th_border" scope="col"><p class="p-tag">배송일</p></th>
                        <th class="product-th_border" scope="col"><p class="p-tag">박스 수거량</p></th>
                        <th class="product-th_border" scope="col"><p class="p-tag">반품/미배송</p></th>
                    </tr>
                    </thead>
                    <tbody v-for="product  of getProductSearch"
                           v-bind:key="product">

                    <tr class="col-6">
                        <td class="product-td-border"><p class="p-tag">{{ product.buyperson }}</p></td>
                        <td class="product-td-border"><p class="p-tag">{{ product.producttype }}</p></td>
                        <td class="product-td-border"><p class="p-tag">{{ product.kg }}</p></td>
                        <td class="product-td-border"><p class="p-tag">{{ product.indate }}</p></td>
                        <td class="product-td-border"><p class="p-tag">{{ product.outdate }}</p></td>
                        <td class="product-td-border"><p class="p-tag">{{ product.boxin }}</p></td>
                        <td class="product-td-border"><p class="p-tag">{{ product.productin }}</p></td>
                    </tr>

                    </tbody>
                </table>
            </div>

        </div>


        <div class="bottom-box">
            <h6>
                운행중 차량 특이사항
            </h6>
            <p v-for="product  of getProductSearch"
               v-bind:key="product">{{ product.goodday }}</p>
        </div>
    </div>
    <form class="search-form" @submit.prevent="searchProduct">
        <input class="form-control w-50" type="date" placeholder="Search" v-model="form.searchProduct">
        <input class="btn btn-outline-success p-1  m-1" type="submit" value="검색하기">
    </form>
    <button class="download-button position-relative" id="download2">
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
.position-relative.border-1 {
    padding: 0;
    width: 49.7%;


}

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

.search-form {
    top: 20px;
    display: flex;
    width: 280px;
    position: relative;
    left: 120px;
    bottom: 35px;
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


/* The scrollable part */

.right-table {
    justify-items: revert;
    max-height: 100%;
    position: relative;
    bottom: 39px;
    border-bottom: 1px solid #ddd;
}

tbody {

}

.product-td-border {
    border: 1px solid black;

}

tr {
    padding: 0;
}

.product-th_border {
    padding: 4px;
    border: 0.5px solid #000000;
    align-content: center;
}

.product-page {
    margin-left: 120px;
    height: 560px;
    border-left: 2px solid #2d2d2d;
    border-right: 2px solid #2d2d2d;
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

.p-tag {
    margin: 0;
    text-align: center;
    padding: 4px;

}

.bottom-box {
    position: relative;
    background: white;
    margin-left: 120px;
    justify-items: end;
    width: 1200px;
    border: 3px solid #2d2d2d;
    height: 150px;
}
</style>