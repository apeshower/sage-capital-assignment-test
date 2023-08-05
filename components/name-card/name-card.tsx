import React, {useState} from "react"
import Card from "../ui/card/card"
import { Grid } from "@mui/material"
import ProfilePicture from "./profile-picture"
import ToggleButton from "../ui/toggle-button"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../action"
import MaskSVG from "../mask-svg"
import EditForm from "../edit-form"

interface NameCardProps {
    data: any
    onClick: any
    onHandleDataChange?: any
    onHandleDisableUser?: any
    isModal? : boolean
}

const NameCard: React.FC<NameCardProps> = ({data, onClick, onHandleDataChange, isModal, onHandleDisableUser}) => {
    const [openEditor, setOpenEditor] = useState(false)

    const dispatch = useDispatch()

    const {openModal} = useSelector((state: any) => state.ui)

    const onToggleCard = (user: any) => {
        onHandleDisableUser(user, !data.disabledStatus)

        if (openModal && !data.disabledStatus) {
            
            setTimeout(() => {
                dispatch(uiActions.closeModal())
            }, 300)
        }
    }

    const onCloseEditor = () => {
        setOpenEditor(false)
    }

    const onOpenEditor = () => {
        setOpenEditor(true)
    }

    const handleOnClick = () => {
        if (!data.disabledStatus) {
            onClick()
        }
    }

    return (
        <Grid item xs={4}>
            <Card className={`${data.disabledStatus ? 'disabled' : ''} ${openEditor ? 'open-editor' : ''} ${isModal ? 'scale-up' : ''}`}>
                {openEditor && <EditForm data={data} onCloseEditor={onCloseEditor} onHandleDataChange={onHandleDataChange}/>}
                <div className="edit-button absolute left-[1rem] top-[0.75rem] z-20 cursor-pointer" onClick={onOpenEditor}><MaskSVG src="/images/icons/edit-regular.svg" width="24px" height="27px" backgroundColor={'#000000'} /></div>
                <div className="absolute right-[0.25rem] top-[0.25rem] z-20"><ToggleButton checked={data.disabledStatus} onChange={() => onToggleCard(data)}/></div>
                <div onClick={handleOnClick} className={`wrapper h-full pt-10 ${data.disabledStatus ? 'opacity-30' : ''}`}>
                    {data.imageUrl &&
                    <ProfilePicture url={data.imageUrl} id={data.id}/>}
                    <div className="text-center mt-1">
                        <div>{data?.name || ""}</div>
                        <div className="text-xs">{data?.email || ""}</div>
                        <div className="text-xs">{data?.phone || ""}</div>
                    </div>
                    <div className="w-[170px] mx-auto h-[1px] bg-black my-1" />
                    <div className="text-xs text-center mt-1">{data?.username || ""}</div>
                </div>
            </Card>
        </Grid>
    )
}

export default NameCard
