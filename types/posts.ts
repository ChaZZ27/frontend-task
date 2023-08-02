export type Post = {
    id: number,
    title: string,
    body: string,
    excerpt: string,
    topic: string,
    author: string,
    date: string,
    image: string,
    type: string,
    sign_up_url: string
}

export type PostsList = Post[]

export type PostDetails = {
    title: string,
    date: string,
    type: string,
    sign_up_url: string
}

export interface PostsProps {
    posts: PostsList
}