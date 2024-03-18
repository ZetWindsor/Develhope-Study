import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from "./Welcome"
import { Container } from "./Container"
import LoginForm from "./LoginForm"
import Catalogue from "./Catalogue"
import Product from "./Products"
import GithubUsers from "./GithubUsers"

function App() {

  return (
    <Container title={<div>
      <h1>la mia applicazione di route</h1>
      <div>
        <Link to='/'>Home</Link> | <Link to='products'>Products</Link> | <Link to='users'>users</Link>
      </div>
    </div>}>
      <Routes >
        <Route path="/" element={<Welcome />} />
        <Route path="products" element={<Catalogue />}>
          <Route index element={<p>selezionare un prodotto</p>} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="users" element={<GithubUsers />} />
        <Route path='*' element={<div><p>Not Found</p> <Link to='/'>Go Home</Link> </div>} />

      </Routes>
    </Container>
  )
}

export default App
