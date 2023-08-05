import Image from "next/image"
import React from "react"

interface ProfilePictureProps {
    url: string
    id: any
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({url, id}) => {
    return (
        <div className="relative overflow-hidden w-[100px] h-[100px] rounded-full mx-auto">
            <Image src={url || ''} alt={id || ''} layout="fill" objectFit="cover" fill={true} />
        </div>
    )
}

export default ProfilePicture