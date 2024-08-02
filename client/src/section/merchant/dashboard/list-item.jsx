import React from 'react'

const ListItem = ({ row }) => {
    const { attachment, category, price, title, description } = row;

    return (
        <div className="card bg-base-100 w-72 shadow-xl pt-5">
            <figure>
                <img
                    src={attachment}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="flex items-center justify-between">
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">₱ {price}</div>

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem