import { useState, useEffect } from "react"
import { request, gql } from 'graphql-request'
import Page from './Page'


const Book = () => {
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

    const [pageNumber, setPageNumber] = useState({
        left: 0,
        right: 1
    })
    const [bookContent, setBookContent] = useState({})

    useEffect(() => {
        request(endpoint, query)
            .then(data => setBookContent({data}))

    }, []);
    console.log(bookContent.data)

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
            // account for array indices
        }
    }

    return (
        <div className="book">
            <button className="button left" onClick={()=> changePage('left')} />
            <Page page={pageNumber.left} pages={bookContent.data.book.pages}/>
            <Page page={pageNumber.right} pages={bookContent.data.book.pages}/>
            <button className="button right" onClick={()=> changePage('right')} />

        </div>
    )
}

export default Book