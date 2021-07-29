/** @jsx jsx */
/** @jsxFrag */
import React from 'react'
import { css, jsx, Global } from '@emotion/react'

const Maid: React.FC = () => {
    return (
        <>
            <Global styles={css`

                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    -webkit-tap-highlight-color: transparent;
                }

                a {
                    text-decoration: none;
                }

                ul {
                    list-style: none;
                }

                button, input, textarea {
                    outline: none;
                }

            `} />
        </>
    )
}

export default Maid
