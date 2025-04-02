import React, { useContext } from "react";
import { Parthu } from "./datacardplas";
import { Plasticcard } from "./plastcard";
import { CartContext } from "./CartContext";

export function Plastic(){
    const { addToCart } = useContext(CartContext);

    return(
        <div>
            <br></br>
            <h1 className="plastich">PLASTIC BAGS</h1>
            <br></br><br></br>
            <div className="containerplas">
               <div className="rowplas">
                
                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[0].title} 
                        disc={Parthu[0].disc} 
                        image={Parthu[0].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[0])}
                    />
                </div>

                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[1].title} 
                        disc={Parthu[1].disc} 
                        image={Parthu[1].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[1])}
                    />
                </div>

                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[0].title} 
                        disc={Parthu[0].disc} 
                        image={Parthu[0].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[0])}
                    />
                </div>
               </div>
            </div>
            <br></br><br></br><br></br>

            <div className="containerplas">
               <div className="rowplas">
                
                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[1].title} 
                        disc={Parthu[1].disc} 
                        image={Parthu[1].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[1])}
                    />
                </div>

                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[0].title} 
                        disc={Parthu[0].disc} 
                        image={Parthu[0].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[0])}
                    />
                </div>

                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[1].title} 
                        disc={Parthu[1].disc} 
                        image={Parthu[1].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[1])}
                    />
                </div>
               </div>
            </div>
            <br></br><br></br><br></br>

            <div className="containerplas">
               <div className="rowplas">
                
                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[0].title} 
                        disc={Parthu[0].disc} 
                        image={Parthu[0].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[0])}
                    />
                </div>

                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[1].title} 
                        disc={Parthu[1].disc} 
                        image={Parthu[1].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[1])}
                    />
                </div>

                <div className="colplas">
                    <Plasticcard 
                        title={Parthu[0].title} 
                        disc={Parthu[0].disc} 
                        image={Parthu[0].image} 
                        button={Parthu[0].button}
                        onAddToCart={() => addToCart(Parthu[0])}
                    />
                </div>
               </div>
            </div>
            <br></br><br></br><br></br>
        </div>
    )
}