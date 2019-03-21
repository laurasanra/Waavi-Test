<template>
    <div>
        <h1>Component Page</h1>
        <article />
        <VLink to="Home">Back </VLink>
    </div>
</template>

<script>
import Article from '../components/Article';

export default {
  name: 'Component',
  components: {
    Article,
  },
};
</script>
