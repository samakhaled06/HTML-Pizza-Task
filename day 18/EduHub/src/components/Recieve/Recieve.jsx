export default function Recieve({ productDetails,deleteProduct }) {
    let { id,prodName, price, desc, quantity, onSale } = productDetails;

    return (
        <>
            <div className="col-md-3">
                <div className="item bg-secondary p-4 text-light position-relative">
                    <h3>product name:{prodName}</h3>
                    <h3>product price:{price}</h3>
                    <h3>product quantity:{quantity}</h3>
                    <h3>product description:{desc}</h3>
                    <span className="badge bg-danger p-2 position-absolute">
                        {onSale ? 'Sale':''}
                    </span>
                    <div className="d-flex justify-comtent-evenly">
                        <button className="btn btn-danger" onClick={()=>deleteProduct(id)}>Delete</button>
                        <button className="btn btn-info">Update</button>
                    </div>
                </div>
            </div>
        </>
    );
}
