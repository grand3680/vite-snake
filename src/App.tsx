import { FC } from 'react';
import {SnakeCanvas} from './components/canvas/'
import {SettingPoopUp} from './components/settings/'


const App : FC = () => {
  return (
    <>
      <h1>Snake</h1>
      <SnakeCanvas />
      <SettingPoopUp />
    </>
  )
}

export default App
