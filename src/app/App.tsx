import { Outlet } from 'react-router-dom'
import { ContactDock } from '../components/layout/ContactDock'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { PageContainer } from '../components/layout/PageContainer'
import { CustomCursor } from '../components/ui/CustomCursor'
import { PageCurtain } from '../components/ui/PageCurtain'
import { PuppyTrail } from '../components/ui/PuppyTrail'
import { PageMetadata } from './PageMetadata'

export function App() {
  return (
    <div className="site-shell">
      <PageMetadata />
      <CustomCursor />
      <PuppyTrail />
      <PageCurtain />
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