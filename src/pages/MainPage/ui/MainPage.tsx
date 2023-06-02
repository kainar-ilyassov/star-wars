import { type ReactElement } from 'react'
import { Counter } from 'entities/Counter'

const MainPage = (): ReactElement => {
  return (
    <div>
      Main Page
      <Counter/>
    </div>
  )
}

export default MainPage
