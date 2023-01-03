import './App.css';
import Modal from './Components/Modal';
import { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  font-family:sans-serif;
  text-align: center;
  position:relative;
`
const Overlay = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0, 0, 0, .5);
`
const Dialog = styled.div`
background:#fff;
border-radius: 5px;
padding:20px;
position:absolute;
z-index: 1;
top: 350px;
left: 700px;
`

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Root>
      <h1>Modal components</h1>
      <h2>Example</h2>
      <button onClick={() => setIsModalOpen(true)}>Open window</button>
      {
        isModalOpen && (
          <Overlay>
            <Dialog>
              <p>
                Lorem ipsum,
              </p>
              <button onClick={() => {setIsModalOpen(false)}}>Close window</button>
            </Dialog>
          </Overlay>
        )
      }
    </Root>
  );
}

export default App;

