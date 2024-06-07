export function CardProduct ({ product }) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={product.thumbnail} className='card-img-top' alt='Imagen del producto' />
      <div className='card-body'>
        <h5 className='card-title'>{product.title}</h5>
        <h6 className='card-subtitle mb-2 text-body-secondary'>{product.category}</h6>
        <p className='card-text'>{product.description}</p>
        <a href='#' className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  )
}
