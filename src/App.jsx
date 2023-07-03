import { useRef } from 'react'
import Background from './components/Background'
import TopMenu from './components/TopMenu'
import Filter from './components/Filter';
import List from './components/List';
import Cart from './components/Cart';
import { useState } from 'react';


function App() {
  const mainRef = useRef();
  const [active, setActive] = useState(false);
  return (
    <>
      <Background mainRef={mainRef} />
      <main className='invisible' ref={mainRef}>
        <Cart />
        <TopMenu setActive={setActive} />
        <Filter active={active} setActive={setActive} />
        <List />
      </main>
    </>
  )
}

export default App
