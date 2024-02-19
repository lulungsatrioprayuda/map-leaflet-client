export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Root page</h1>
                <div>
                    <form role="search" id="search-form">
                        <input id="1" aria-label="Search" placeholder="Search" type="search" name="q" />
                        <div id="search-spinner" aria-hidden hidden={true}>
                            <div className="sr-only" aria-aria-live></div>
                        </div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li><a href="/location/1">your name</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}