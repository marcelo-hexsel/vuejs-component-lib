<template>
  <div class="container-fluid">
    <component-a label="First Test" />
		<component-a label="Second Test" />
  </div>  
</template>

<script>
import ComponentA from "../components/ComponentA"

export default {
	name: "ComponentAVisualTests",
	components: { ComponentA },
	data() {
		return {}
	}
}
</script>
<style scoped>

</style>