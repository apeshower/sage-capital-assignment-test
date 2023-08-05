import React, { useEffect, useState } from "react"
import NameCard from "../name-card"
import GridLayout from "../grid-layout"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../action"
import SingleCardModal from "../single-card-modal"

const NameCardLists = () => {
    const [userData, setUserData] = useState<any>([])

    const dispatch = useDispatch()

    const {openModal} = useSelector((state: any) => state.ui)

    const fetchLists = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            if (data) {
                fetchProfilePicture(data)
            }
        } catch (e: any) {
            console.error('fetchLists', e)
        }
    }

    const fetchProfilePicture = async(dataArray: any) => {
        try {
            const localStorageObj = localStorage || window?.localStorage
            let usersData = localStorageObj?.getItem('usersData')
            if (!usersData) {
                const response = await fetch('https://picsum.photos/v2/list')
                const data = await response.json()
                if (data) {
                    const updatedUserData= dataArray.map((user: any) => ({
                        ...user,
                        imageUrl: data[user.id]?.download_url || "",
                        disabledStatus: false
                    }))
                    localStorageObj?.setItem('usersData', JSON.stringify(updatedUserData))
                    setUserData(updatedUserData)
                }
            } else {
                setUserData(JSON.parse(usersData || ''))
            }    
        } catch (e: any) {
            console.error('fetchProfilePicture', e)
        }
    }

    const onOpenModal = (user: any) => {
        dispatch(uiActions.setSelectedData(user))
        dispatch(uiActions.openModal())
    }

    const onHandleDataChange = (user: any) => {
        const localStorageObj = localStorage || window?.localStorage
        const indexToUpdate = user.id - 1

        if (indexToUpdate >= 0 && indexToUpdate < userData.length) {
            const updatedArray = [...userData] // Create a copy of the existing array
            updatedArray[indexToUpdate] = {
                ...updatedArray[indexToUpdate], // Copy the existing object
                name: user.name,
                email: user.email,
                phone: user.phone,
                username: user.username
            }
            
            setUserData(updatedArray) // Update the state with the updated array
            localStorageObj?.setItem('usersData', JSON.stringify(updatedArray))

            if (openModal) {
                dispatch(uiActions.setSelectedData(updatedArray[indexToUpdate]))
            }
        }
    }

    const onHandleDisableUser = (user: any, disableStatus: boolean) => {
        const localStorageObj = localStorage || window?.localStorage
        const indexToUpdate = user.id - 1

        if (indexToUpdate >= 0 && indexToUpdate < userData.length) {
            const updatedArray = [...userData] // Create a copy of the existing array
            updatedArray[indexToUpdate] = {
                ...updatedArray[indexToUpdate], // Copy the existing object
                disabledStatus: disableStatus,
            }
            
            setUserData(updatedArray) // Update the state with the updated array
            localStorageObj?.setItem('usersData', JSON.stringify(updatedArray))
                dispatch(uiActions.setSelectedData(updatedArray[indexToUpdate]))
        
        }
    }

    useEffect(() => {
        fetchLists()
    })

    return (
        <>
            <SingleCardModal onHandleDataChange={onHandleDataChange} onHandleDisableUser={onHandleDisableUser}/>
            <GridLayout>
                {userData.length > 0 ?
                    userData.map((user: any) => {
                        return (
                            <NameCard key={user.id} data={user} onClick={() => onOpenModal(user)} onHandleDataChange={onHandleDataChange} onHandleDisableUser={onHandleDisableUser}/>
                        )
                    })
                    : ''
                }
            </GridLayout>
        </>
    )
}

export default NameCardLists