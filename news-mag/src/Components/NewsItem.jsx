

function NewsItem({title,description,url,src}) {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-3 py-3" style={{maxWidth:"345px"}}>
            <img src={src} style={{width:"310px",height:"200px"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"no news for this we extremely sorry"}</p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
        </div>
    )
}

export default NewsItem
