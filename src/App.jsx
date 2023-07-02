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
      <main className='opacity-0' ref={mainRef}>
        <Cart />
        <TopMenu />
        <Filter />
        <List />
      </main>
    </>
  )
}

export default App
