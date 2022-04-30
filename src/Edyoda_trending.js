import "./Edyoda_stories.css"

function EdTrend() {
    return (
        <section class="categories">
            <div class="header">
                <h1 class="header-main-text">Trending Posts</h1>
                <h4 class="header-sub-text">
                    <i class="bx bxs-filter-alt icon-filter"></i>Filter by Category
                </h4>
            </div>
            <div class="category-buttons">
                <a class="category active-category" href="#">All</a>
                <a class="category" href="#">Artificial Intelligence</a>
                <a class="category" href="#">Cloud Computing</a>
                <a class="category" href="#">DevOps</a>
                <a class="category" href="#">Programming Languages</a>
                <a class="category" href="#">Mobile Application Development</a>
                <a class="category" href="#">Technology and Tools</a>
                <a class="category" href="#">Get a Job in a Tech Company</a>
                <a class="category" href="#">Others</a>
            </div>
        </section>
    )
}
export default EdTrend;
