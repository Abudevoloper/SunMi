<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ProductPage",
    methods: {
        ...mapActions(['fetchProduct']),

    },
    computed: {
        ...mapGetters(['getProduct']),


    },

    mounted() {
        console.log('저장 내용을 찾았습니다')

        this.fetchProduct(this.$route.params.id)

    },
    watch: {
        "$route.params.id"() {
            this.fetchProduct(this.$route.params.id)

        }
    }


}
const downloadLinks = document.querySelectorAll("[data-download]");
    downloadLinks.forEach(button => {
        const id = button.dataset.download;
        const url = document.getElementById(id);
        const a = document.createElement("a");

        a.href = url;
        a.download = "";
        a.style.display = "none";


        button.addEventListener("click", ()=> {
            document.body.appendChild("a");
            a.click();
        })
    })
</script>

<template >
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
            <div class="col-4">출고일 :</div>
            <div class="col-4">작성자 :</div>
            <div class="col-4">차량번호 :</div>
        </div>
        <div class="right-table">
            <table class="position-relative-right border-1">
                <thead>
                <tr>
                    <th class="product-th-border" scope="col"><p>거래처</p></th>
                    <th class="product-th-border" scope="col"><p>폼목</p></th>
                    <th class="product-th-border" scope="col"><p>수량(kg)</p></th>
                    <th class="product-th-border" scope="col"><p>제조일</p></th>
                    <th class="product-th-border" scope="col"><p>배송일</p></th>
                    <th class="product-th-border" scope="col"><p>박스 수거량</p></th>
                    <th class="product-th-border" scope="col"><p>반품/미배송</p></th>
                </tr>
                </thead>
                <tbody v-for="product  of getProduct"
                       v-bind:key="product">
                <tr>
                    <td class="product-td-border"><p>{{ product.buyperson }}</p></td>
                    <td class="product-td-border"><p>{{ product.producttype }}</p></td>
                    <td class="product-td-border"><p>{{ product.kg }}</p></td>
                    <td class="product-td-border"><p>{{ product.indate }}</p></td>
                    <td class="product-td-border"><p>{{ product.outdate }}</p></td>
                    <td class="product-td-border"><p>{{ product.boxin }}</p></td>
                    <td class="product-td-border"><p>{{ product.productin }}</p></td>
                </tr>

                </tbody>
            </table>
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
                </tr>
                </thead>
                <tbody v-for="product  of getProduct"
                       v-bind:key="product">
                <tr >
                    <td class="product-td-border"><p>{{ product.buyperson }}</p></td>
                    <td class="product-td-border"><p>{{ product.producttype }}</p></td>
                    <td class="product-td-border"><p>{{ product.kg }}</p></td>
                    <td class="product-td-border"><p>{{ product.indate }}</p></td>
                    <td class="product-td-border"><p>{{ product.outdate }}</p></td>
                    <td class="product-td-border"><p>{{ product.boxin }}</p></td>
                    <td class="product-td-border"><p>{{ product.productin }}</p></td>
                </tr>

                </tbody>
            </table>
        </div>

    </div>


    <div class="bottom-box">
        <h6>
            운행중 차량 특이사항
        </h6>
        <p></p>
    </div>
    </div>
        <button class="button" type="button" data-download="myPage">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download"
                 viewBox="0 2 16 16">
                <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            다운로드
        </button>


</template>

<style>

.button {
    margin-top: 160px;
    margin-left: 120px;
    border: none;
    background: #363535;
    color: white;
    font-family: sans-serif;
    border-radius: 10px;
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
    padding: 0;
    width: 50.3%;
    overflow-y: scroll;
}

.position-relative-right {
    position: absolute;
    margin-left: 50.3%;
    width: 49.6%;
    overflow-y: scroll;
    padding: 0;

}

/* The scrollable part */

.right-table {
    max-height: 100%;
    display: block;
    overflow-y: scroll;
    position: relative;
    bottom: 39px;
    border-bottom: 1px solid #ddd;
}

tbody {

}

.product-td-border {
    border: 1px solid #2d2d2d;
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

h6 {
    text-align: center;
    border-bottom: 1px solid #2d2d2d;
}

p {
    margin: 0;
    padding: 5px;
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