function Filter({ selectedCategory, handleCategoryChange }) {

    return (
        <select
            onChange={handleCategoryChange} 
            value={selectedCategory}
        >
            <option value="ALL">All</option>
            <option value="GREASED">Greased</option>
            <option value="UNGREASED">Ungreased</option>
        </select>
    )
}

export default Filter