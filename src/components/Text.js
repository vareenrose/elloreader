import { useState } from "react"
import Modal from "./Modal"

const Text = ({ token, content }) => {

    // const [start, end] = token.position
    const [showModal, setShowModal] = useState(false)

    console.log(content.slice(token.position[0], token.position[1]+1))


    return (
        <div className="inlinetext">
            <span onClick={() => setShowModal(true)}>
                {content.slice(token.position[0], token.position[1]+1)}
            </span>
            {showModal &&
                <Modal value={token.value} onClose={() => setShowModal(false)} />
            }
        </div>

    )
}

export default Text