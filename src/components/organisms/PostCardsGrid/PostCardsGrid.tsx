import { PostsProps } from "types/posts";
import styles from "./PostCardsGrid.module.sass"
import PostCard from "@/molecules/postCard/PostCard";

const PostCardGrid = ({posts}: PostsProps) => {

    // sort posts 
    posts.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
    })    

    return <div className={styles.postCardsGrid}>
        {posts.map(post => <PostCard key={post.id} {...post} />)}
    </div>
}

export default PostCardGrid;