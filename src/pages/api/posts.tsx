import type { NextApiRequest, NextApiResponse } from 'next'
import { PostsList } from 'types/posts'
import posts from "../../data/posts.json"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostsList>
) {
    res.status(200).json(posts)
}