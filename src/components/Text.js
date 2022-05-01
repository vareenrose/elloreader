import { useState } from "react"
import Modal from "./Modal"

const Text = ({ token, content }) => {

    // state variable managing modal visibility
    const [showModal, setShowModal] = useState(false)

    // Extract words from content string that correspond to tokens using the position array

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