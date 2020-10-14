import { bookService } from "@/services/bookService.js";


export default {
    state: {
        books: null,
        filterBy: null
    },
    getters: {
        booksToShow(state) {
            const books = state.books
            if (!state.filterBy) return books;
            const booksToShow = books?.filter((book) => {
                if (state.filterBy.txt) {
                    if (
                        !book.title.toLowerCase().includes(state.filterBy.txt.toLowerCase())
                    ) return false;
                }
                if (state.filterBy.max) {
                    if (!(book.listPrice.amount < state.filterBy.max)) return false;
                }
                return true;
            })
            return booksToShow
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books
        },
        setFilterBooks(state, { filterBy }) {
            state.filterBy = filterBy
        }
    },
    actions: {
        async loadBooks({ commit }) {
            const books = await bookService.query();
            commit({ type: 'setBooks', books })
        },
        setFilterBooks({ commit }, { filterBy }) {
            // const filter = { ...filterBy }
            commit({ type: 'setFilterBooks', filterBy })
        }
    },
}
