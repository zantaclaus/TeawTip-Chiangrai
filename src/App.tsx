import { ScrollContainer, ScrollPage } from 'components/scrollPage'
import React from 'react'

const App: React.FC = (): JSX.Element => {
  return (
    <ScrollContainer>
      <ScrollPage>Page 1</ScrollPage>
      <ScrollPage>Page 2</ScrollPage>
      <ScrollPage>Page 3</ScrollPage>
      <ScrollPage>Page 4</ScrollPage>
    </ScrollContainer>
  )
}

export default App
