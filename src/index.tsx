import { createRoot } from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from 'app/App'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
