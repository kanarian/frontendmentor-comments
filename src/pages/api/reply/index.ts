import type { NextApiRequest, NextApiResponse } from 'next'
import { Reply } from '../../../Types/CommentTypes'
import { supabase } from '../../../util/supabaseClient'

  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {data: allReplies, error, status} = await supabase
        .from<Reply>("Reply")
        .select("*")
    res.status(200).json(allReplies)
}
