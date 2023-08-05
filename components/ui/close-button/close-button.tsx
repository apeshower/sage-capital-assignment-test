import MaskSVG from "../../mask-svg"
import { StyledButton } from "./close-button.styled"

interface ButtonProps {
    onClick: () => void
}

const CloseButton: React.FC<ButtonProps> = ({onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            <MaskSVG src="/images/icons/x-white.svg" width="16px" height="16px" backgroundColor="#FFFFFF" />
        </StyledButton>
    )
}

export default CloseButton