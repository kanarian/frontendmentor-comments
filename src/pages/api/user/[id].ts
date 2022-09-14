import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../Types/CommentTypes'
import { supabase } from '../../../util/supabaseClient'
  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id : userId } = req.query
    if(!userId){
        res.status(404).json("User ID param not found")
        return
    }
    if(Array.isArray(userId)){
        res.status(404).json("User ID should contain a single param")
        return
    }
    const userIdInt = parseInt(userId)

    const {data: thisUser, error, status} = await supabase
        .from<User>("User")
        .select("*").eq('id', userIdInt)
    if(error){res.status(500).send(""); return}
    if(thisUser.length <= 0){res.status(404).send(`User with id ${userId} not found`); return}
    res.status(200).json(thisUser)
}
