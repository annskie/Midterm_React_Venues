
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark bg-opacity-75">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/venues">Venues</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;