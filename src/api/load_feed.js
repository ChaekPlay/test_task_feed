export async function loadFeed(start, end) {
    try {
        const response = await fetch(
            "http://localhost:3000/posts" + "?_start=" + start + "&_end=" + end
          );
          const feed = await response.json();
          return feed;
    } catch (error) {
        console.log(error);
        return [];
    }
 
}
