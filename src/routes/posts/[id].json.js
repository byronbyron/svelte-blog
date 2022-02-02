export async function get({ params }) {
    
    // simulate database
    const posts = [
        {id: 1, title: 'My First Post', body: 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: 2, title: 'My Second Post', body: 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: 3, title: 'My Third Post', body: 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: 4, title: 'My Really Long Post Lorem ipsum dolor sit amet', body: 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: 5, title: 'My Fifth Post', body: 'Lorem, ipsum, dolor sit amet consectetur adipisicing elit.'}
    ];

    const post = posts.find((p) => p.id == params.id);

    if (post) {
        return {
            status: 200,
            body: { post }
        }
    }

    return {
        status: 404
    }
}
