<script>
    export let title = 'Blog Posts';
</script>

<div class="title">
    <img src="/controller.svg" alt="site logo">
    <h1><a href="/">{title}</a></h1>
</div>

<style>
    .title {
        display: flex;
    }
    .title img {
        display: inline-block;
        filter: opacity(0.5);
    }
    .title h1 {
        margin-left: 0.625rem;
    }
    .title a {
        text-decoration: none;
    }
</style>
