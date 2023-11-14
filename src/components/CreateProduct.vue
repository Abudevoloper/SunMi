<script>
import {mapActions, mapGetters} from "vuex";

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
                boxin: "",
                productin: "",
                goodday: "",
            }
        }
    },
    methods: {
        ...mapActions(['pushProduct']),
        ...mapActions(['pushCategory']),
        ...mapActions(['pushProductCategory']),
        ...mapActions(['fetchCategory']),
        ...mapActions(['fetchProductCategory']),

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
    computed: {
        ...mapGetters(['getCategory']),
        ...mapGetters(['getProductCategory']),


    },
    mounted() {
        console.log('저장 내용을 찾았습니다')

        this.fetchCategory(this.$route.params.id)
        this.fetchProductCategory(this.$route.params.id)


    },
    watch: {
        '$route.params.id'() {
            this.fetchCategory(this.$route.params.id)
            this.fetchProductCategory(this.$route.params.id)
        },
    }
}

</script>

<template>
    <div class="product-category mt-5">
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
        <div class="right-category">
            <form @submit.prevent="flyproduct">
                <table class="position-relative border-1">
                    <thead>
                    <tr>
                        <th class="product-th" scope="col"><p class="p_tag">거래처</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">폼목</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">수량(kg)</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">제조일</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">배송일</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">박스 수거량</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">반품/미배송</p></th>
                        <th class="product-th" scope="col"><p class="p_tag">특이 사항</p></th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <select
                                v-model="newProduct.buyperson">
                                <option v-for="category of getCategory"
                                        v-bind:key="category"> {{ category.name }}
                                </option>

                            </select>
                        </td>
                        <td>
                            <select v-model="newProduct.producttype">
                                <option v-for="product_category of getProductCategory"
                                        v-bind:key="product_category">{{ product_category.name }}
                                </option>
                            </select>
                        </td>
                        <td><input id="create-input" type="text" v-model="newProduct.kg" required></td>
                        <td><input id="create-input" type="date" v-model="newProduct.indate" required></td>
                        <td><input id="create-input" type="date" v-model="newProduct.outdate" required></td>
                        <td><input id="create-input" type="text" v-model="newProduct.boxin"></td>
                        <td><input id="create-input" type="text" v-model="newProduct.productin"></td>
                        <td><input id="create-input" type="text" v-model="newProduct.goodday"></td>

                    </tr>
                    <tr>
                        <td>
                            <input type="text" id="create-input"  class="bg-body-secondary border-1" v-model="newProduct.buyperson" placeholder="직접 작성하기"
                                   required>
                        </td>
                        <td>
                            <input type="text" id="create-input" class="bg-body-secondary border-1" v-model="newProduct.producttype" placeholder="직접 작성하기"
                                   required>
                        </td>
<!--                        <td>-->
<!--                            <input  type="number"  id="create-input" class="bg-body-secondary border-1" v-model="newProduct.kg" required >-->
<!--                        </td>-->
                    </tr>
                    <button class="saving-button">등록하기</button>
                    </tbody>

                </table>
            </form>
        </div>
    </div>


    <div class="bottom-box">
        <h6 class="background-fixed ">
            운행중 차량 특이사항:
        </h6>

        <p class="p-3 m-2" ><strong> </strong></p>
    </div>

</template>


<style>

strong {
    margin-top: 10px;
}

.saving-button {
    position: relative;
    bottom: 60px;
    left: 960px;
    background: #284127;
    border-radius: 5px;
    color: white;
    font-size: 2rex;
}

.saving-button:hover {
    background: white;
    color: black;
}

#create-input {
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

.right-category {
    position: relative;
    bottom: 39px;

}

.product-th {
    border: 1px solid #2d2d2d;
    padding: 5px;

}

.product-category {
    margin-left: 120px;
    height: 600px;
    border-left: 1px solid #2d2d2d;
    border-right: 3px solid #2d2d2d;
    border-top: 2px solid #2d2d2d;
    width: 1200px;
    left: 100px;
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
    border-bottom: 1px solid #284127;
    position: fixed;
    width: 1195px;


}

.p_tag {

    height: 20px;
    display: inline;
    color: #0a0a0a;


}

.bottom-box {
    text-align: center;
    position: relative;
    background: white;
    margin-left: 120px;
    justify-items: end;
    width: 1200px;
    border: 3px solid #2d2d2d;
    height: 150px;
}
</style>