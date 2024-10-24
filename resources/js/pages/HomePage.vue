<template>
    <div class="container">
      <div v-if="loading">
        <LoadingSpinner />
      </div>
      <div class="row my-4" v-else>
        <div class="col-lg-6 offset-lg-3">
            <!-- <div class="hstack gap-2"> -->
            <input type="text" class="form-control" placeholder="Search Pokemon" v-model="search">
                <!-- <button v-if="search" class="btn btn-secondary">Reset</button> -->
            <!-- </div> -->
        </div>
        <div class="col-lg-4" v-for="pokem in filteredPokemonsList" :key="pokem.name">
            <div class="pokemon-container" @click="loadPokemonPage(pokem)">
                <span class="fs-3">
                    {{ pokem.name }}
                </span>
            </div>
        </div>
        <div class="row my-4 text-center" v-if="filteredPokemonsList.length == 0">
            <p>No Pokemons Found</p>
        </div>
      </div>
    </div>
  </template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const search = ref('')
const pokemons = ref(null)
const loading = ref(true)
const router = useRouter()

const fetchPokemon = async () => {
    loading.value = true
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=1302'
    try {
        const response = await axios.get(url)
        pokemons.value = response.data
    } catch (error) {
        console.error(error)
    }
    loading.value = false
}

const loadPokemonPage = (pokem) => {
    router.push({
        name: 'pokedex-view',
        params: {name: pokem.name}
    })
}

const filteredPokemonsList = computed(() => {
    if(search.value === ''){
        return pokemons.value.results
    }
    return pokemons.value.results.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(search.value.toLowerCase())
    })
})

onMounted(() => {
    fetchPokemon()
})
</script>
<style>
    .pokemon-container{
        border: 1px solid #e1e0e0;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        text-transform: capitalize;
    }
</style>