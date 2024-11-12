
import './App.css'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'

function App() {


  return (
    <div className="container">
      <h1>Product Management</h1>
      <AddProduct/>
      <ProductList/>
    </div>
  )
}

export default App
