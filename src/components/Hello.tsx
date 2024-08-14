import { FC } from "react";

import { Product, products } from "@/data/products";



const HelloCard : FC = ()=> {
    return (
        <div>
            {products.map((p,index)=>(
                <li key={p.id} className=" list-none">
                    <h2 className="font-bold ">{p.name} </h2>
                    {p.description}
                </li>

            ))}
        </div>
    )
}

export default HelloCard;