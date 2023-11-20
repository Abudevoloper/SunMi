import {createStore} from "vuex";
import history from "@/vuex/history";
import saving from "@/vuex/saving"
import productdownload from "@/vuex/productdownload";



export default createStore({
    modules: {
        history,
        productdownload,
        saving,

    }
})