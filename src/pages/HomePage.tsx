import {
  FAQSection,
  FamiliesSection,
  FinalCTASection,
  MeetThePupsSection,
  PuppyJourneySection,
  TrustSection,
  WaysToMeetSection,
} from '../components/home/HomeSections'
import { HeroSection } from '../components/home/HeroSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MeetThePupsSection />
      <WaysToMeetSection />
      <PuppyJourneySection />
      <TrustSection />
      <FamiliesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}