## LAYOUTS DEL PROYECTO

### Ejemplo
```bash
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About Us</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}

export default MainLayout
```