import { useState, useMemo, useEffect, useCallback } from "react";

export default function useFilters(games) {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sort, setSort] = useState('titleAsc')

    const debounce = useCallback((value, delay) => {
         const handler = setTimeout(() => {
            setDebouncedQuery(value);
         }, delay)

         return () => clearTimeout(handler)
    })

    useEffect(() => {
        const clean = debounce(query, 500)
        return clean
    }, [query, debounce])

     const filteredGames = useMemo(() => {
            const result = [...games].filter(game => {
                const matchTitle = game.title
                    .toLowerCase()
                    .includes(debouncedQuery.toLowerCase())
    
                const matchCategory =
                    categoryFilter === 'all' || game.category === categoryFilter
    
                return matchTitle && matchCategory
            })
    
            if (sort === 'categoryAsc') {
                result.sort((a, b) => {
                   return a.category.localeCompare(b.category)
                })
            }
    
            if (sort === 'categoryDesc') {
                result.sort((a, b) => {
                   return b.category.localeCompare(a.category)
                })
            }
    
            if (sort === 'titleAsc') {
                result.sort((a, b) => {
                   return a.title.localeCompare(b.title)
                })
            }
    
            if (sort === 'titleDesc') {
                result.sort((a, b) => {
                   return b.title.localeCompare(a.title)
                })
            }
    
            return result
    
        }, [games, debouncedQuery, categoryFilter, sort])

        return {
            query,
            setQuery,
            categoryFilter,
            setCategoryFilter,
            sort,
            setSort,
            filteredGames
        }
}