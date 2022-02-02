<script>
    import Title from '$lib/title.svelte';
    import '../../styles/global.css';
</script>

<header>
    <nav>
        <Title title="Blog Posts" />
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/posts">Posts</a>
        </div>
    </nav>
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
        text-align: center;
        background-color: rgba(0, 0, 0, 0.1);
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 0.625rem;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
</style>
