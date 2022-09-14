import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../../util/supabaseClient'
  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != "PUT"){
        res.status(405).send({ message: 'Only PUT requests allowed' })
        return
    }

    const { id : replyId } = req.query
    if(!replyId){
        res.status(404).json("Reply ID param not found")
        return
    }
    if(Array.isArray(replyId)){
        res.status(404).json("Reply ID should contain a single param")
        return
    }
    const replyIdInt = parseInt(replyId)

    const {data, error, status} = await supabase
        .rpc('increment_reply',{x:-1, row_id:replyIdInt})
    res.status(200).send(data)
}
