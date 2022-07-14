import React from "react"
import { SVGProps } from "types"

const LinkItem: React.FC<{
    LinkImage: React.FC<SVGProps>
    imgClassName: string
    label: string
    link: string
}> = ({ LinkImage, imgClassName, label, link }) => {
    return (
        <div className="w-full border-b border-l border-r border-action-active">
            <a href={link} rel="noopener noreferrer" target="_blank">
                <button className="flex w-full items-center justify-center py-4 transition-colors duration-500 hover:bg-tracer-midblue">
                    <LinkImage className={`mr-5 ${imgClassName}`} />
                    <span>{label}</span>
                </button>
            </a>
        </div>
    )
}

export default LinkItem
