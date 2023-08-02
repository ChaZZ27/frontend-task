import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import Post from '@/molecules/post/Post'
import { Layout } from "src/components/layout"

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const postId = context.query.id
    
    const res = await fetch(`http://localhost:3000/api/singlePost?id=${postId}`)
    const post = await res.json()
    return { 
        props: {
            post 
        } 
    }
}

const PostPage = ({post}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    
    return (
        <Layout>
            <Post {...post} />
        </Layout>
    )
}

export default PostPage