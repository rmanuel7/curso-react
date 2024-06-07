import { useState } from 'react'
import { CardProduct } from './CardProduct'
import { FilterProduct } from './FilterProduct'
import { ShoppingTitle } from './ShoppingTitle'

export function GridProducts ({ products }) {
  const [filter, setFilter] = useState({ category: 'all', price: 0 })
  const applyFilters = (products) => {
    return products.filter((product) => {
      return product.price >= filter.price && (filter.category === 'all' || product.category === filter.category)
    })
  }
  return (
    <div className='container text-center'>
      <ShoppingTitle />
      <FilterProduct handleFilter={setFilter} />
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
          applyFilters(products).map((product) => (
            <div className='col' key={product.id}>
              <CardProduct product={product} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
