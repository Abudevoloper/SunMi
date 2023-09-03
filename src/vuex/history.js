import axios from "@/vuex/axios";

export default {
    actions: {
        pushHistory(context, data) {

            return new Promise((resolve) => {

                axios
                    .post('http://localhost:9701/api/sun_mi_times', data)
                    .then((response) => {
                        console.log('체줄되었습니다')
                        console.log(response)

                        context.commit('updateHistory', data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('문제가 있습니다')

                    })
            })
        }
    },


    mutations: {
        updateHistory(state, sun_mi_times) {
            state.sun_mi_times = sun_mi_times
        }
    },
    state: {
        sun_mi_times: {
            models: [],
            totalItems: 0
        }

    },

}