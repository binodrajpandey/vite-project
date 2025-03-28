<template>
    <main class="container">
     <h1>Our Cars</h1>
     <select v-model="make" @change="handleChange">
        <option value="All">All</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Buick">Buick</option>
        <option value="Porsche">Porsche</option>
        <option value="Audi">Audi</option>

     </select>
      <div class="cards">
        <div
          v-for="car in cars"
          :key="car.id" 
          class="card"
          @click="router.push(`car/${car.id}`)"
          >
            <h1>{{ car.make }}</h1>
            <p>${{ car.price }}</p>

        </div>
        <!-- <RouterLink :to="`/car/${car.id}`" v-for="car in cars" :key="car.id" class="card">
            <h1>{{ car.make }}</h1>
            <p>${{ car.price }}</p>
        </RouterLink> -->

    </div>
  </main>
</template>

<script setup>
import carData from "../data.json"
import { useRoute, useRouter, RouterLink } from "vue-router";
import { onMounted, ref, watch } from "vue";

const router = useRouter()
const route = useRoute()
const cars = ref(carData)
const make = ref("All")
const price = ref("")

watch(make, () => {
    if (make.value === "All") {
      cars.value = carData
    } else {
      cars.value = carData.filter(c => c.make === make.value)
    }
})

const handleChange = () => {
    router.push({
        query: {
            make: make.value
        }
    })
}

onMounted(() =>{
    console.log(route.query)
    make.value = route.query.make
})

</script>
<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;

}
</style>
