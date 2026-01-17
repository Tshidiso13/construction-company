import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
        <Hero />
        <Cards />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home