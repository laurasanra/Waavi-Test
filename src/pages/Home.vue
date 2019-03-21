<template>
    <div class="Home">
        <img class="HomeLogo" src="../assets/logo.png" />
        <h3>Flexbox and Sass test</h3>
        <VLink to="Sass"> Go to Sass test </VLink>
        <VLink to="Layout"> Go to Layout test </VLink>
        <h3>Javascript test</h3>
        <VLink to="Javascript"> Go to Javascript test </VLink>
    </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
.Home {
    background: white;
    padding: 50px 0;
    text-align: center;
    &Logo {
        height: auto;
        margin-bottom: 25px;
        width: 225px;
    }
}
</style>
