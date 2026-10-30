import { Outlet } from 'react-router-dom'
import { ContactDock } from '../components/layout/ContactDock'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'

export function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <ContactDock />
      <Footer />
    </div>
  )
}