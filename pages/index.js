import fetch from "node-fetch";
import { useState } from "react";

function HomePage() {
    const [jwt, setJwt] = useState(null);
    const [cart, setCart] = useState(null);

    return (
        <div>
            <div>
                <p>Products: ...</p>
            </div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default HomePage;
