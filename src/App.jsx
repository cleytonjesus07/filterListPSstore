import { useRef } from 'react'
import Background from './components/Background'
import TopMenu from './components/TopMenu'
import Filter from './components/Filter';
import List from './components/List';
import Cart from './components/Cart';


function App() {
  const mainRef = useRef();
  return (
    <>
      <Background mainRef={mainRef} />
      <main className='invisible' ref={mainRef}>
        <Cart />
        <TopMenu />
        {/* <Filter /> Fazer versão mobile*/}
        <List />
      </main>
    </>
  )
}

export default App
