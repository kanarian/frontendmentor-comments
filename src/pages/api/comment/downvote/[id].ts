import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../../util/supabaseClient'
  

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != "PUT"){
        res.status(405).send({ message: 'Only PUT requests allowed' })
        return
    }

    const { id : commentId } = req.query
    if(!commentId){
        res.status(404).json("Comment ID param not found")
        return
    }
    if(Array.isArray(commentId)){
        res.status(404).json("Comment ID should contain a single param")
        return
    }
    const commentIdInt = parseInt(commentId)

    const {data, error, status} = await supabase
        .rpc('increment_comment',{x:-1, row_id:commentIdInt})
    res.status(200).send(data)
}
