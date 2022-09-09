import './index.css';
import data from'./data/data.json'
import NonReplyComment from './Components/NonReplyComment';


function App() {
  const currentUser = data.currentUser
  const allComments = data.comments

  return (
    <div className="w-screen h-screen">
      {allComments.map(comment => {
        return (<NonReplyComment comment={comment}/>)
      })
      }
    </div>
  );  
}

export default App;