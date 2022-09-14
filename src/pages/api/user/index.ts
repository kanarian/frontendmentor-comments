import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../Types/CommentTypes'
import { supabase } from '../../../util/supabaseClient'
  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {data: allUsers, error, status} = await supabase
        .from<User>("User")
        .select("*")
    res.status(200).json(allUsers)
}
