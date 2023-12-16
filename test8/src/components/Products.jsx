
function Products(props) {
  return (
    <ul>
        <li><b>Product Title :</b>{props.title}</li>
        <li><b>Product description :</b>{props.description}</li>
        <li><b>Product category :</b>{props.category}</li>
        <li><b>Product rating :</b>{props.rating.rate}</li>
    </ul>
  )
}

export default Products