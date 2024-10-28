export async function loadFeed(start, end) {
    const response = await fetch('http://localhost:3000/posts'+'?_start='+start+'&_end='+end);
    const feed = await response.json();
    console.log(feed);
    return feed;
}