import './App.css'
import User from './components/User'

const usrs = ['User 1', 'User 2', 'User 3','']

function App() {

  const onUpdate = (user)=>{
    console.log('Updated', user)
  
  };

  return (
    <>
      <h1>Hello</h1>
      {
        usrs.map((user, index) => {
          return <User key={index} name={user} onUpdate={onUpdate} />
        })
      }
    </>
  )
}

export default App
