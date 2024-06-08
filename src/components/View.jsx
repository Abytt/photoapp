import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data, changedata] = useState([])
    const fectchData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(
            (response)=>{
                changedata(response.data)
            }
        ).finally()   
    }
    useEffect(()=>{fectchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           
                                {data.map(
                                    (value, index) => {
                                        return  <div className="col col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.url} class="card-img-top" alt="...">
                                            </img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.albumId}</h5>
                                                <p class="card-text">{value.title}</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{value.id}</li>
                                                <li class="list-group-item">A second item</li>
                                                <li class="list-group-item">A third item</li>
                                            </ul>

                                        </div>
                                        </div>

                                    }
                                )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default View