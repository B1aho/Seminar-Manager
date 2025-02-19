import './App.css'
import { useGetSeminars } from './hooks/use-get-seminars'

function App() {
  const { seminars, isLoading, error } = useGetSeminars();
  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
