import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment } from '../../../Types/CommentTypes'
import { supabase } from '../../../util/supabaseClient'

  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {data: allComments, error, status} = await supabase
        .from<Comment>("Comment")
        .select("*, user_id(id, username, image-png)")
    res.status(200).json(allComments)
}
