//importing our hooks to help fetch out data from the api
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"


export default function DogBreeds() {
    // different dog breeds API Fetch Code
    //using useState to help get and populate the dog as an array, the text as a string for the name
    const [dogs, setDogs] = useState([]);
    const [text, setText] = useState("")
    const [searchDog, setSearchedDog] = useState(false)

    useEffect(()=> {
        const fetchDogData = async () => {
            try {
                const res = await fetch ("https://api.thedogapi.com/v1/breeds");
                const data = await res.json();
                setDogs(data);
            } catch (error) {
                console.log(error);
            }
        }
    
    setSearchedDog(false)
    fetchDogData()
    }, [])

    const searchForDogBreed = async () => {
        try {
            const res = await fetch (
                `https://api.thedogapi.com/v1/breeds/search?q=${text}`)
            const data = await res.json()
            setDogs(data)
        } catch (error) {
            console.log(error);
        }
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            searchForDogBreed()
            setSearchedDog(true)
        }

    return (
    <>
        {!dogs ? (
            <h1>Page is Loading Please be Patient...</h1>
        ) : (
        <>
        <div className="dogBreeds">
            <div>
                <h1>Dog Breeds</h1>
            </div>
            <p>
                <div className="dogBreeds-api">
                This application is poweed by {" "}
                <a href="https://thedogapi.com/" >
                    The Dog API
                    </a>
                </div>
            </p>
            {/* craeting a from to help us search for the dog breeds */}
            <form 
            onSubmit = {handleSubmit}
            className="dogBreeds-form"
            autoComplete="off"
            >
                <input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a dog breed"
                    className="dogsearch-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>

        <div className="dogbreed-card">
            {!searchDog ? (
                dogs.map((dog) => (
                    <Link
                    to={`/${dog.name}`}
                    key={dog.id}
                    className="dogbreed-card-link"
                    >
                        <div>
                            <img 
                                src={dog.image.url}
                                alt={dog.name}
                                loading="lazy"
                                className="dogbreed-card-image"
                            />
                            <h3 className="dog-name">
                                {dog.name}
                            </h3>
                            <p> Bred for: {dog.bred_for}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <>
                {dogs.map((dog) => (
                    <Link
                        to={`/${dog.name}`}
                        key={dog.id}
                        className="dogbreed-card-name"
                        >
                            <div>
                                <img
                                    src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                                    alt={dog.name}
                                    className="dogbreed-image"
                                    />
                                <h3>
                                    {dog.name}
                                </h3>
                                <p>
                                    Bred for: {dog.breed_for}
                                </p>
                            </div>
                        </Link>
                ))}
                </>
            )
            }
        </div>
        </>
        )}
    </>
    )
}
