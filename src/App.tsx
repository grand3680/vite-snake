import { FC } from 'react';
import {SnakeCanvas} from './components/canvas/'
import {SettingPoopUp} from './components/settings/'


const App : FC = () => {
  return (
    <>
      <h1>Snake</h1>

      <SettingPoopUp />

      <SnakeCanvas />
    </>
  )
}

export default App
