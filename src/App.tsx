import './index.css';
import data from'./data/data.json'
import NonReplyComment from './Components/NonReplyComment';
import AddComment from './Components/AddComment';


function App() {
  const currentUser = data.currentUser
  const allComments = data.comments

  return (
    <div className="w-screen h-screen bg-veryLightGray px-4">
      {allComments.map(comment => {
        return (<NonReplyComment comment={comment}/>)
      })
      }
      <AddComment currentUser={currentUser}/>
    </div>
  );  
}

export default App;