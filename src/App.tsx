import { getSeminars } from './api/seminar-service'
import './App.css'


function App() {
  getSeminars().then((res) => console.log(res));
  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
