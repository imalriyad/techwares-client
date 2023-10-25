import Brands from "../Brands/Brands";
import Hero from "../Header/Hero";
import Map from "../components/Map";
import Testimonial from "../components/Testimonial";


const Home = () => {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <Hero/>
            <Brands></Brands>
            <Testimonial></Testimonial>
            <Map></Map>
        </div>
    )
};

export default Home;