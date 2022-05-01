import Text from "./Text"

const Page = ({ page, pages }) => {

  return (
    <div className='page'>
      {pages[page].tokens.length>0 ?
        pages[page].tokens.map((token, index) =>
          <Text
            key={index}
            token={token}
            content={pages[page].content.toString()}

          />
        ) : <p></p>
      }


    </div>
  )
}

export default Page