import "./Edyoda_stories.css"

function EdHeader() {
    return (
        <header>
            <nav>
                <div class="logo">
                    <a href="#" class="logo-text">EDYODA</a>
                    <p class="logo-sub-text">Stories</p>
                </div>
                <div class="dropdown">
                    <p>
                        Explore Categories
                    </p>

                </div>
                <p id="nav-para">
                    EdYoda is free learning and knowledge
                    sharing platform for techies
                </p>
                <button id="btn">
                    Go to Main Website
                </button>

            </nav>
        </header>
    )
}

export default EdHeader;