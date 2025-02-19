import { 
    Link, 
    useLocation 
} from "react-router"

export default function Page({ links }) {
    const location = useLocation();

    const renderedLinks = links.map(link => (
        <li key={link.name}>
            <Link to={link.path} className={`${location.pathname === link.path && "link__alt"}`}>{link.name}</Link>
        </li>
    ));

    return (
        <div className="page__container">
            <nav>
                <ul className="page__links">
                    {renderedLinks}
                </ul>
            </nav>
        </div>
    )
}