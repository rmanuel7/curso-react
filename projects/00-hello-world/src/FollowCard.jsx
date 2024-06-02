import { useState } from 'react'
import viteLogo from '/vite.svg'

export function FollowCard( { prefix, username } )
{
    const [isFollowing, setFollowing] = useState(false)

    const handleClick = ()=> setFollowing(!isFollowing)

    return (
        <div className='d-inline-flex align-items-center gap-2 px-2 rounded border' >
            <div >
                <img src={viteLogo} alt='Icono de vite'/>
            </div>
            <div className='d-flex flex-column'>
                <strong>{ username }</strong>
                <small>@{ prefix }</small>
            </div>
            <div>
                <button type='button' className='btn btn-primary btn-sm' onClick={handleClick}>
                    { isFollowing ? 'Unfollow' : 'Follow' }
                </button>
            </div>
        </div>
    )
}