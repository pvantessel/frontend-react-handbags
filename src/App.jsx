import './App.css'
import Button from "./components/Button/Button.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import brand from './assets/brand.png'
import aboutus from './assets/our_story.png'
import InfoTile from "./components/InfoTile/InfoTile.jsx";

function clickOnButton1() {
    console.log("To the collection");
}

function clickOnButton2() {
    console.log("Shop all bags");
}

function clickOnButton3() {
    console.log("Pre-orders");
}

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    buttonType="button"
                    buttonText="To the collection"
                    buttonAction={clickOnButton1}
                    buttonDisabled={false}
                />
                <Button
                    buttonType="button"
                    buttonText="Shop all bags"
                    buttonAction={clickOnButton2}
                    buttonDisabled={false}
                />
                <Button
                    buttonType="button"
                    buttonText="Pre-orders"
                    buttonAction={clickOnButton3}
                    buttonDisabled={true}
                />
            </nav>

            <main>
                <ProductCard
                    productLabel="Best seller"
                    productImg={bag1}
                    productImgAlt="bag1"
                    productDesc="The handy bag"
                    productPrice="€400,-"
                />
                <ProductCard
                    productLabel="Best seller"
                    productImg={bag2}
                    productImgAlt="bag2"
                    productDesc="The stylish bag"
                    productPrice="€250,-"
                />
                <ProductCard
                    productLabel="New collection"
                    productImg={bag3}
                    productImgAlt="bag3"
                    productDesc="The simple bag"
                    productPrice="€300,-"
                />
                <ProductCard
                    productLabel="New collection"
                    productImg={bag4}
                    productImgAlt="bag4"
                    productDesc="The trendy bag"
                    productPrice="€150,-"
                />
            </main>

            <footer>
                <InfoTile
                    title="THE BRAND"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales dapibus elit, quis sollicitudin diam venenatis vel. Pellentesque at diam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales dapibus elit, quis sollicitudin diam venenatis vel. Pellentesque at diam.</p>
                </InfoTile>

                <InfoTile
                    image={brand}
                    imageAlt="brand image"
                />

                <InfoTile
                    image={aboutus}
                    imageAlt="about us"
                />

                <InfoTile
                    title="OUR STORY"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales dapibus elit, quis sollicitudin diam venenatis vel. Pellentesque at diam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales dapibus elit, quis sollicitudin diam venenatis vel. Pellentesque at diam.</p>
                </InfoTile>
            </footer>

        </>
    )
}

export default App
