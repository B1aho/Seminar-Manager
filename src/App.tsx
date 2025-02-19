import './App.css'
import { SeminarList } from './components/SeminarList';

function App() {
  return (
    <>
      <h1 className='mb-6 text-3xl font-bold text-center'>
        Доступные семинары
      </h1>
      <SeminarList />
    </>
  )
}

export default App
