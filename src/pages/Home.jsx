import Brands from "../Brands/Brands";
import Hero from "../Header/Hero";


const Home = () => {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <Hero/>
            <Brands></Brands>
        </div>
    )
};

export default Home;