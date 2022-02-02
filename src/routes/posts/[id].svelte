<script context="module">
    export async function load({ fetch, params }) {
        const id = params.id;
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await res.json();

        if (res.ok) {
            return {
                props: {
                    post
                }
            }
        }

        return {
            status: 301,
            redirect: '/posts'
        }
    }
</script>

<script>
    export let post
</script>

<div class="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
</div>

<style>
    .post {
        margin-top: 2.5rem;
        padding: 0 1.625rem 0.75rem;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>