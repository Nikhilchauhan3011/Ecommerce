import React, { useState } from 'react'

const WhiteHeart = () => {
	const [isClicked, setIsClicked] = useState(false)

	const handleClick = () => {
        setIsClicked(!isClicked)
	}

	return (
        <div onClick={handleClick} style={{width:'30px'}}>
            {!isClicked &&
                <div
                    style={{
                        fontSize: '35px',
                        cursor: 'pointer',
                        color: 'black'
                        // backgroundColor: isClicked ? 'black' : 'blue'
                    }}
                >
                        &#x2661;
                </div>
            }
            {isClicked &&
                <div style={{ fontSize: '35px', cursor: 'pointer', color:'red'}}>
                    &#x2665;
                </div>
        }
        </div>
	)
}

export default WhiteHeart
