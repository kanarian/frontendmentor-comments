export const getRepliesByCommentId = async (id: number) => {
    const replies = await fetch(`/api/reply/get-by-comment-id/${id}`)
        .then(response => response.json())
        .catch(err => {throw new Error("Internal service error")})
        .then(replyList => replyList)
    return replies
}