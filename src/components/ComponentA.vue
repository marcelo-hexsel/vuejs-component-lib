<template>
  <div class="component-a-class">
    {{label}}:{{value}}
  </div>
</template>

<script>
export default {
	name: "ComponentA",
	props: ["label"],
	data() {
		return {
			value: "test value"
		}
	}
}
</script>

<style scoped>
.component-a-class {
	color: red;
}
</style>
