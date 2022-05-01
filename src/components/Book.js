import { useState, useEffect } from "react"
import { request, gql } from 'graphql-request'
import Page from './Page'


const Book = () => {

    // initialize the api endpoint and graphql query
    const endpoint = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql'
    const query = gql`{
        book{
            pages{
                content
                tokens{
                    position
                    value
                }
            }
            title
            author
        }
    }`

    // state variable to keep track of the pages in the book
    const [pageNumber, setPageNumber] = useState({
        left: 0,
        right: 1
    })

    // initialize state variable to save data fetched below in useeffect
    const [bookContent, setBookContent] = useState({})

    useEffect(() => {
        request(endpoint, query)
            .then(data => setBookContent({data}))

        console.log('somethi')
    }, [query]);

    // function that increments or decrements page number depending on the button clicked
    const changePage = (direction) => {
        if(direction === 'right' && pageNumber.right+1 < bookContent.data.book.pages.length){
            setPageNumber({
                left: pageNumber.left+2,
                right: pageNumber.right+2,

            })
        } else if(direction === 'left' && pageNumber.left !== 0){
            setPageNumber({
                left: pageNumber.left-2,
                right: pageNumber.right-2,

            })
            // account for array index limits
        }
    }

    // check whether the network request has fetched the data
    const bookContentExists = !!Object.keys(bookContent).length


    return (


        <div className="book">

            <button className="button left" onClick={()=> changePage('left')} />
            {bookContentExists &&
            <>
                <Page page={pageNumber.left} pages={bookContent.data.book.pages}/>
                <Page page={pageNumber.right} pages={bookContent.data.book.pages}/>
            </>
            }
            <button className="button right" onClick={()=> changePage('right')} />

        </div>



    )
}

export default Book