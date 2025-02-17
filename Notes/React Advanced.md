<h1 align="center">React Advanced</h1>

![](https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18)

## Children props

App.jsx
```html
<Button>Buy now!</Button>
```

Button componet
```jsx
export default function Button({ children }) {
    return (
        <button>{children}</button>
    )
}
```

> it can take jex as childern


## Destructuring props

```jsx
export default function Button({children, ...rest}) {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}
```

> This way we can give real html attributes to a custem react componet by spreding props in to real jsx element

# React Router

### Basic Router setup

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Using ID in url

app.jsx
```jsx
import { BrowserRouter, Routes, Route, } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
```
product.jsx

```jsx
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    // params.id is the url id, then using this id data can be fetch from server

    return ()
}
```

# Nested Routes

