import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setUser, resetUser } from './userSlice'
const values = ['name', 'age', 'city']
function User() {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    return (
        <div>
            {JSON.stringify(user)}
            <hr />
            {values.map((currentVal) => (
                <input
                    placeholder={currentVal}
                    key={currentVal}
                    name={currentVal}
                    onChange={(e) => {
                        dispatch(setUser({ [currentVal]: e.target.value }))
                    }}
                />
            ))}
            <hr />
            <button onClick={() => dispatch(resetUser())}>
                reset user
            </button>
        </div>
    )
}

export default User
