export default function Child({ productDetails }) {

    let { prodName, price, quantity, onSale } = productDetails

    return (
        <>
            <h1 className="bg-danger text-center text-light">Child</h1>
            <h4>Product Name:{prodName}</h4>
            <h4>Product price:{price}</h4>
            <h4>Product quantity:{quantity}</h4>

            <h4>Product on sale:{onSale==true ?'50%':'Original price'}</h4>


        </>
    );
}
