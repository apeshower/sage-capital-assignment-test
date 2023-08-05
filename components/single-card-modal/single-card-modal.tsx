import React from "react"
import { CardModal, Wrapper } from "./single-card-modal.styled"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../action"
import NameCard from "../name-card/name-card"
import FadeInUpWhenVisible from "../fade-in-up-when-visible"

interface SingleCardModalProps {
    onHandleDataChange: any
    onHandleDisableUser: any
}

const SingleCardModal: React.FC<SingleCardModalProps> = ({onHandleDataChange, onHandleDisableUser}) => {

    const dispatch = useDispatch()

    const {openModal, selectedData} = useSelector((state: any) => state.ui)

    const closeModalHanlder = () => {
        dispatch(uiActions.closeModal())
    }
    return (
        <>
            <CardModal open={openModal} onClose={closeModalHanlder}>
                <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute outline-none">
                    <FadeInUpWhenVisible>
                        <Wrapper className={openModal ? 'open' : ''}>
                            <NameCard data={selectedData} onClick={() => {}} onHandleDataChange={onHandleDataChange} onHandleDisableUser={onHandleDisableUser} isModal />
                        </Wrapper>
                    </FadeInUpWhenVisible>
                </div>
            </CardModal>
        </>
    )
}

export default SingleCardModal