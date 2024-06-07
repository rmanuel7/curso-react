import ReactDOM from 'react-dom/client'
import { GridProducts } from './components/GridProducts'
import { products } from './mocks/products.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <GridProducts products={products} />
)
