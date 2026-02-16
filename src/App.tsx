import SmoothScroll from './components/UI/SmoothScroll';
import Navbar from './components/UI/Navbar';
import Hero from './components/Hero/Hero';
import Production from './components/Production/Production';
import Villains from './components/Villains/Villains';
import History from './components/History/History';
import FloatingShape from './components/Effects/FloatingShape';

import Footer from './components/UI/Footer';

function App() {
  return (
    <SmoothScroll>
      <main className="bg-spider-dark min-h-screen text-white selection:bg-spider-red selection:text-white relative">
        <Navbar />
        <FloatingShape />
        <section id="hero"><Hero /></section>
        <section id="production"><Production /></section>
        <section id="villains"><Villains /></section>
        <section id="history"><History /></section>
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
