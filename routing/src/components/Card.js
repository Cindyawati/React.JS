import React from 'react'

const Card = (props) => (
    <div className="col-md-6">
        <div className="card text-center">
            <img src={props.imageUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p>{props.subtitle}</p>
                <a href="#" className="btn buttonAction">Mulai Belajar</a>
            </div>
        </div>
    </div>
)

export default Card