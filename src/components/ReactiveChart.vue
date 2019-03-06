<template>
    <div id="app">
        <reactive-bar-chart :chart-data="chartData"></reactive-bar-chart>
    </div>
</template>

<script>
    import ReactiveBarChart from "./ReactiveStocksChart.js";
    export default {
        name: "App",
        components: {
            ReactiveBarChart
        },
        data() {
            return {
                chartData: null
            };
        },
        methods: {
            generateData() {
                let newArray = [];
                newArray = this.$store.getters.getPrices;
                let newLabels = [];
                newLabels = this.$store.getters.getNames;

                this.chartData = {
                    labels: newLabels,
                    datasets: [
                        {
                            label: "My Stock Holdings | Live",
                            backgroundColor: "#f87979",
                            data: newArray
                        }
                    ]
                };
            },

            generateLabels(){

            }
        },
        mounted() {
            setInterval(this.generateData, 1000);
        }
    };
</script>

<style scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-size: 20px;

    }
</style>
