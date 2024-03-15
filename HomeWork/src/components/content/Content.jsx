import React from 'react'
import data from '../../data/products.json'

const Content = () => {   
    
    return (
        <>
            <div className="content">
                {data.map((item) => (
                    <div key={item.id} className="card" style={{ marginBottom: "10px",marginRight:"10px", width: "calc(50% - 10px)" }}>
                        <h5 className="card-header">{item.title}</h5>
                        <div className="card-body2">
                            <div className="card-text2">
                                <h5 className="card-title" style={{padding:"15px"}}>{item.brand}</h5>
                                <p style={{padding:"15px"}}>{item.description}</p>
                                <h5 className="card-title" style={{padding:"15px"}}>Price : ${item.price}</h5>
                            </div>
                            <div className="card-image">
                                <img src={item.images} alt="Image" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Content