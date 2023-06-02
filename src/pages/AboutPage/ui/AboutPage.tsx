import { type ReactElement } from 'react'
import { Counter } from 'entities/Counter'

const AboutPage = (): ReactElement => {
  return (
    <div>
      About Page
      <Counter/>
    </div>
  )
}

export default AboutPage
