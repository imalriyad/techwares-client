import Brands from "../Brands/Brands";
import Hero from "../Header/Hero";


const Home = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <Hero/>
            <Brands></Brands>
        </div>
    )
};

export default Home;