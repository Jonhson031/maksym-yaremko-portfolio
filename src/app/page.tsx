import Nav from '@/components/layout/Nav/Nav';
import Footer from '@/components/layout/Footer/Footer';
import Hero from '@/components/sections/Hero/Hero';
import SelectedWork from '@/components/sections/SelectedWork/SelectedWork';
import Process from '@/components/sections/Process/Process';
import About from '@/components/sections/About/About';
import Stack from '@/components/sections/Stack/Stack';
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding/CurrentlyBuilding';
import Contact from '@/components/sections/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <SelectedWork />
      <Process />
      <About />
      <Stack />
      <CurrentlyBuilding />
      <Contact />
      <Footer />
    </>
  );
}
