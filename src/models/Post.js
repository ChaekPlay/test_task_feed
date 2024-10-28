export class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.content = data.content;
        this.date = new Date(data.date);
        this.authorName = data.authorName;
        this.authorUrl = data.authorUrl;
    }
}