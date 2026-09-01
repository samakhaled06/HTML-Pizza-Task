import { Link, Outlet } from "react-router-dom";
export default function Gallery() {


    return (
        <>
            <div className="bg-secondary text-light p-4 text-center">
                <h3>Gallery</h3>
                <div >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="dogs">Dogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="cats">Cats</Link>
                        </li>
                    </ul></div>
            </div>

            <Outlet />
        </>
    );
}
