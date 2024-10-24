<template>
	<div class="container">
		<div v-if="!isLoading">
			
			<div class="row my-4">
				<div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
					<div class="my-3">
						<router-link to="/" class="btn btn-secondary">Back</router-link>
					</div>
					<div class="card" v-if="pokemon">
						<div class="card-body">
							<div class="hstack d-flex justify-content-center">
								<img :src="pokemon.data.sprites.front_default" class="img"/>
								<img :src="pokemon.data.sprites.back_default" class="img"/>
								<img :src="pokemon.data.sprites.front_shiny" class="img"/>
								<img :src="pokemon.data.sprites.back_shiny" class="img"/>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="d-flex justify-content-between info-container">
										<div class="title fs-4"><b>Name</b> </div>
										<div class="fs-5">{{ pokemon.data.name }}</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="d-flex justify-content-between info-container">
										<div class="title fs-4"><b>Species</b> </div>
										<div class="fs-5">{{ pokemon.species.name }}</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="d-flex justify-content-between info-container">
										<div class="title fs-4"><b>Height</b> </div>
										<div class="fs-5">{{ pokemon.data.height}}</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="d-flex justify-content-between info-container">
										<div class="title fs-4"><b>Weight</b> </div>
										<div class="fs-5">{{ pokemon.data.weight}}</div>
									</div>	
								</div>
							</div>
							<div class="d-flex justify-content-between info-container">
								<div class="title fs-4"><b>Abilities</b> </div>
								<ul class="abilities fs-5">
									<li v-for="ability in pokemon.data.abilities" :key="ability.ability.name">
										{{ ability.ability.name }}
									</li>
								</ul>
							</div>
							<!-- <div v-html="pokemonSpecies"></div> -->
						</div>
					</div>
				</div>
				<div class="col-md-12">
				</div>
			</div>
		<!-- show all props passed in -->
		</div>
		<div v-else>
			<LoadingSpinner />
		</div>
	</div>
  </template>
  
  <script setup>
	import { useRoute } from 'vue-router'
	import { defineProps, onMounted, ref, computed } from 'vue'
	import axios from 'axios'
	import LoadingSpinner from '@/components/LoadingSpinner.vue'

	const isLoading = ref(true)
	const route = useRoute()
	const name = route.params.name
	const id = route.query.id
	let pokemon = {};
	let species = null;

	const getPokemonDetails = async () => {
		try {
			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			const species = await getPokemonSpecies();
			pokemon.data = response.data;
			pokemon.species = species.data;
			isLoading.value = false;
			console.log(pokemon)
			// image, name, species, height/weight and any abilities
		} catch (error) {
			console.error(error)
		}
	}

	const getPokemonSpecies = async () => {
		try {
			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
			return response;
			// image, name, species, height/weight and any abilities
		} catch (error) {
			console.error(error)
		}
	}

	onMounted( () => {
		getPokemonDetails()
	})
  </script>
  <style lang="scss">
	.info-container{
		display: flex;
		flex-direction: column;
		margin-bottom:20px;
	}
	.title{
		border-bottom: 1px solid rgb(233, 231, 231);

	}
	.abilities{
		padding:0;
		li {
			list-style-type: none;
		}
	}
	.img{
		width:100%;
	}
  </style>