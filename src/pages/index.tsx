import { useEffect, useState } from 'react';
import { getUserById } from '../api/getUserById';
import AddComment from '../Components/AddComment';
import NonReplyComment from '../Components/NonReplyComment';
import { Comment, Reply, User } from '../Types/CommentTypes';


function App() {
  const [allComments, setAllComments] = useState<Comment[]>();
  const [thisUser, setThisUser] = useState<User>();

  useEffect( () => {
    const loadInData = async () => {
      const thisUser = await getUserById(1).then(setThisUser)
      const allComments = await fetch('/api/comment/').then(x => x.json()).then(commentList => {setAllComments((commentList as Comment[]))});
    }
    loadInData()
  }  
  ,[])


  return (
    <div className="w-screen h-screen bg-veryLightGray px-4">

      {allComments && allComments.sort((a,b) => b.score - a.score).map(comment => {
        return (<NonReplyComment comment={comment}/>)
      })
      }
      {thisUser && <AddComment currentUser={thisUser}/>}
    </div>
  );  
}

export default App;