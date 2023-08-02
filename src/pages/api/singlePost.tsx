import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from 'types/posts'
import posts from "../../data/posts.json"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post | undefined>
) {
    const singlePost = posts.find(el => el.id === Number(req.query.id))
    
    res.status(200).json(singlePost)
}