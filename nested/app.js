let pickerComponent = {
    template: "#plan-picker-template",
    components: {
        plan: planComponent,
    },
    data() {
        return {
            plans: ["The Single", "The Curious", "The Addict"],
        }
    },
}

let planComponent = {
    template: "#plan-template",
    props: {
        name: {
            type: String,
            required: true,
        },
        price: Number,
    },
}

Vue.createApp({
    components: {
        "plan-picker": pickerComponent,
    },
}).mount("#app")
