import { useState } from "react";
import { ImSearch } from 'react-icons/im'
import toast from 'react-hot-toast'
import css from "components/Searchbar/Searchbar.module.css"


export const Searchbar = ({submit}) => {
    
    const [searchQuery, setSearchQuery] = useState("")
    
    const handleSubmit = evt => {
        evt.preventDefault();
            
        if (searchQuery.trim() === "") {
            toast.error('Enter a query in the search field')
            return
        }

        submit(searchQuery)
        reset();
    }
 

    function reset() {
        setSearchQuery("")
    }

    const handleChange = evt => {
        const {value} = evt.target
        setSearchQuery(value);
    };

    return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}><ImSearch/></span>
                    </button>

                    <input
                    onChange={handleChange}
                    name="searchQuery"
                    value={searchQuery}
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
}

