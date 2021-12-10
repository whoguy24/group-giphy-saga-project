function SearchResultItem({ result }) {
    return (
        <div style={{display: 'inline-block'}}>
            <img src={result.images.fixed_height.url}></img>
        </div>
    )
}

export default SearchResultItem;