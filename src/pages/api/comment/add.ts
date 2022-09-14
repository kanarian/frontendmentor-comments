import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment } from '../../../Types/CommentTypes'
import { supabase } from '../../../util/supabaseClient'

  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    const {content, user_id} = JSON.parse(req.body)
    const {data, error, status} = await supabase
        .from<Comment>("Comment")
        .insert([{content: content, user_id: user_id}])
    res.status(200).send(data)
}
