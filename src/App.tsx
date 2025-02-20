import './App.css'
import { SeminarList } from './components/SeminarList';

function App() {
  return (
    <>
      <h1 className='mb-6 text-3xl p-4 font-bold text-center bg-white bg-opacity-60 shadow-sm rounded-md'>
        Доступные семинары
      </h1>
      <SeminarList />
    </>
  )
}

export default App
