<script>
    import Title from '$lib/title.svelte';
    import '../styles/global.css';
</script>

<header>
    <Title title="Blog Posts" />
</header>

<main>
    <!-- page content -->
    <slot></slot>
</main>

<footer>
    <p>Copyright 2022 Blog Posts</p>
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
</style>
