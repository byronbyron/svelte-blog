export async function get() {
    
    // simulate database
    const posts = [
        {id: 1, title: 'My First Post'},
        {id: 2, title: 'My Second Post'},
        {id: 3, title: 'My Third Post'},
        {id: 4, title: 'My Really Long Post Lorem ipsum dolor sit amet'},
        {id: 5, title: 'My Fifth Post'}
    ];

    return {
        status: 200,
        body: { posts }
    }
}
