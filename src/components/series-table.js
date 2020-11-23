import React from "react"

const Series = ({children}) => (
    <details className="series md:mx-24 mb-12 text-center cursor-pointer" open>
        <summary>Articles in this Series</summary>
        <ul>
            {children}
        </ul>
    </details>
)

export default Series