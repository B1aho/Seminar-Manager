import './App.css'
import { SeminarList } from './components/SeminarList';
import { useGetSeminars } from './hooks/use-get-seminars'

function App() {
  const { seminars, isLoading, error } = useGetSeminars();
  return (
    <>
      <h1 className='mb-6 text-3xl font-bold text-center'>
        Доступные семинары
      </h1>
      <SeminarList seminars={seminars} isLoading={isLoading} error={error} />
    </>
  )
}

export default App
