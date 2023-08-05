import React, { ReactNode } from "react";
import { Component } from "./card.styled";

interface CardProps {
    children: ReactNode
    className: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <Component className={className}>{children}</Component>
}

export default Card