import { lazy, Suspense } from 'react'
import LazyMount from './components/common/LazyMount'
import TopNav from './components/layout/TopNav'

const HeroSection = lazy(() => import('./sections/HeroSection'))
const SolutionsSection = lazy(() => import('./sections/SolutionsSection'))
const AutomationSection = lazy(() => import('./sections/AutomationSection'))
const IndustriesSection = lazy(() => import('./sections/IndustriesSection'))
const ClientsSection = lazy(() => import('./sections/ClientsSection'))
const GlobalPresenceSection = lazy(() => import('./sections/GlobalPresenceSection'))
const QualitySection = lazy(() => import('./sections/QualitySection'))
const AboutSection = lazy(() => import('./sections/AboutSection'))
const ContactSection = lazy(() => import('./sections/ContactSection'))
const FooterSection = lazy(() => import('./sections/FooterSection'))

function SectionFallback({ height = 420 }) {
  return (
    <div
      className="site-container animate-pulse rounded-3xl border border-brand-line bg-brand-panel"
      style={{ height }}
    />
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0d1714] via-[#111c18] to-[#24121b] text-brand-text">
      <TopNav />
      <main className="relative overflow-hidden">
        <Suspense fallback={<SectionFallback height="100vh" />}>
          <HeroSection />
        </Suspense>

        <LazyMount placeholderHeight={860}>
          <Suspense fallback={<SectionFallback height={820} />}>
            <SolutionsSection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={780}>
          <Suspense fallback={<SectionFallback height={740} />}>
            <AutomationSection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={760}>
          <Suspense fallback={<SectionFallback height={720} />}>
            <IndustriesSection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={700}>
          <Suspense fallback={<SectionFallback height={660} />}>
            <ClientsSection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={820}>
          <Suspense fallback={<SectionFallback height={780} />}>
            <GlobalPresenceSection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={740}>
          <Suspense fallback={<SectionFallback height={700} />}>
            <QualitySection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={620}>
          <Suspense fallback={<SectionFallback height={580} />}>
            <AboutSection />
          </Suspense>
        </LazyMount>

        <LazyMount placeholderHeight={660}>
          <Suspense fallback={<SectionFallback height={620} />}>
            <ContactSection />
          </Suspense>
        </LazyMount>

        <Suspense fallback={<SectionFallback height={180} />}>
          <FooterSection />
        </Suspense>
      </main>
    </div>
  )
}

export default App
