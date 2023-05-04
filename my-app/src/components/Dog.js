import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom"

function Dog() {
    const [dog, setDog] = useState(null);
    const { name } = useParams()

    useEffect(() => {
        const fetchSearchDogData = async () => {
            try {
                const res = await fetch (
                    `https://api.thedogapi.com/v1/breeds/search?q=${name}`
                )
                const data = await res.json()
                setDog(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSearchDogData()
    }, [name])

    return (
        <>
        <div className="single-dog-data">
            {dog && dog.map((item) => (

                <div className="single-dog-data-item"
                key={item.id}>

                    <div className="single-dog-data-item-img">
                        <img 
                            src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`} 
                            alt={item.name} />
                    </div>

                    <div>
                        <h1> {item.name}</h1>
                        <p>
                            {item.description && (
                                <p> {item.description} 
                                </p>
                            )}

                            <div>
                                <ul>
                                    <li>
                                        <span>Bred For:</span>{" "}
                                        {item.bred_for}
                                    </li>
                                    <li>
                                        <span>Height:</span>{" "}
                                        {item.height.metric} cm
                                    </li>
                                    <li>
                                        <span>Weight:</span>{" "}
                                        {item.weight.metric} kgs
                                    </li>
                                    <li>
                                        <span>Breed Group:</span>{" "}
                                        {item.breed_group}
                                    </li>
                                    <li>
                                        <span>Lifespan:</span>{" "}
                                        {item.life_span}
                                    </li>
                                    <li>
                                        <span>Temperament:</span>{""}
                                        {item.temperament}
                                    </li>
                                </ul>

                                <Link to="/" >
                                    &lar; Back
                                </Link>
                            </div>
                        </p>
                    </div>
                </div>
            ))}

        </div>
        </>
    )
}

export default Dog