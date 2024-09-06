import React from "react"

export type SvgProps = {
    className?: string
}

export const VectorIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="2" height="288" viewBox="0 0 2 288" fill="none">
            <path d="M1 0V288" stroke="#6698CA" strokeWidth="2" />
        </svg>
    )
}

export const EllipseIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} width="8" height="9" viewBox="0 0 8 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4.5" r="4" />
        </svg>
    )
}

export const Logo = ({ className }: SvgProps) => {
    return (
        <svg className={className} width="142" height="89" viewBox="0 0 142 89" fill=" " xmlns="http://www.w3.org/2000/svg">
            <path d="M115.588 44.5C115.588 69.0767 95.6646 89 71.0879 89C46.5112 89 26.5879 69.0767 26.5879 44.5C26.5879 19.9233 46.5112 0 71.0879 0C95.6646 0 115.588 19.9233 115.588 44.5Z" fill="#0054A6" />
            <path fillRule="evenodd" clipRule="evenodd" d="M71.0879 87C94.56 87 113.588 67.9721 113.588 44.5C113.588 21.0279 94.56 2 71.0879 2C47.6158 2 28.5879 21.0279 28.5879 44.5C28.5879 67.9721 47.6158 87 71.0879 87ZM71.0879 89C95.6646 89 115.588 69.0767 115.588 44.5C115.588 19.9233 95.6646 0 71.0879 0C46.5112 0 26.5879 19.9233 26.5879 44.5C26.5879 69.0767 46.5112 89 71.0879 89Z" fill="white" />
            <path d="M51.0625 30.0376L1 56.7376L43.8312 43.3876L90 59.5189L140.619 32.8188L97.2312 46.7251L51.0625 30.0376Z" fill="white" stroke="#0054A6" strokeLinejoin="round" />
        </svg>
    )
}

export const CopyIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.99967 14.6668C4.31967 14.6668 1.33301 11.6802 1.33301 8.00016C1.33301 4.32016 4.31967 1.3335 7.99967 1.3335C11.6797 1.3335 14.6663 4.32016 14.6663 8.00016C14.6663 11.6802 11.6797 14.6668 7.99967 14.6668Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.91984 10.0002C9.44651 10.4135 8.83316 10.6668 8.15983 10.6668C6.6865 10.6668 5.49316 9.4735 5.49316 8.00016C5.49316 6.52683 6.6865 5.3335 8.15983 5.3335C8.83316 5.3335 9.44651 5.58683 9.91984 6.00016" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const MapIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M21.7183 8.19024C20.5352 3.2322 15.9944 1 12.0056 1H11.9944C8.01689 1 3.46477 3.22146 2.28167 8.17951C0.963353 13.7171 4.52393 18.4068 7.74647 21.358C8.88869 22.411 10.416 22.9998 12.0056 23C13.538 23 15.0704 22.4527 16.2535 21.358C19.4761 18.4068 23.0366 13.7278 21.7183 8.19024ZM12.0056 13.5668C11.5395 13.5668 11.078 13.4794 10.6474 13.3095C10.2168 13.1396 9.82548 12.8906 9.4959 12.5767C9.16631 12.2628 8.90487 11.8901 8.7265 11.48C8.54813 11.0699 8.45633 10.6303 8.45633 10.1863C8.45633 9.74241 8.54813 9.30282 8.7265 8.89269C8.90487 8.48255 9.16631 8.10988 9.4959 7.79598C9.82548 7.48207 10.2168 7.23306 10.6474 7.06318C11.078 6.89329 11.5395 6.80585 12.0056 6.80585C12.947 6.80585 13.8497 7.16201 14.5154 7.79598C15.181 8.42994 15.5549 9.28978 15.5549 10.1863C15.5549 11.0829 15.181 11.9427 14.5154 12.5767C13.8497 13.2107 12.947 13.5668 12.0056 13.5668Z" fill="" />
        </svg>
    )
}

export const PhoneIcon = ({ className }: SvgProps) => {
    return (
        < svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" >
            <path d="M21.97 18.9965C21.97 19.3565 21.89 19.7265 21.72 20.0865C21.55 20.4465 21.33 20.7865 21.04 21.1065C20.55 21.6465 20.01 22.0365 19.4 22.2865C18.8 22.5365 18.15 22.6665 17.45 22.6665C16.43 22.6665 15.34 22.4265 14.19 21.9365C13.04 21.4465 11.89 20.7865 10.75 19.9565C9.58811 19.1066 8.49169 18.1706 7.47 17.1565C6.45877 16.1385 5.5261 15.0454 4.68 13.8865C3.86 12.7465 3.2 11.6065 2.72 10.4765C2.24 9.3365 2 8.2465 2 7.2065C2 6.5265 2.12 5.8765 2.36 5.2765C2.6 4.6665 2.98 4.1065 3.51 3.6065C4.15 2.9765 4.85 2.6665 5.59 2.6665C5.87 2.6665 6.15 2.7265 6.4 2.8465C6.66 2.9665 6.89 3.1465 7.07 3.4065L9.39 6.6765C9.57 6.9265 9.7 7.1565 9.79 7.3765C9.88 7.5865 9.93 7.7965 9.93 7.9865C9.93 8.2265 9.86 8.4665 9.72 8.6965C9.59 8.9265 9.4 9.1665 9.16 9.4065L8.4 10.1965C8.29 10.3065 8.24 10.4365 8.24 10.5965C8.24 10.6765 8.25 10.7465 8.27 10.8265C8.3 10.9065 8.33 10.9665 8.35 11.0265C8.53 11.3565 8.84 11.7865 9.28 12.3065C9.73 12.8265 10.21 13.3565 10.73 13.8865C11.27 14.4165 11.79 14.9065 12.32 15.3565C12.84 15.7965 13.27 16.0965 13.61 16.2765C13.66 16.2965 13.72 16.3265 13.79 16.3565C13.87 16.3865 13.95 16.3965 14.04 16.3965C14.21 16.3965 14.34 16.3365 14.45 16.2265L15.21 15.4765C15.46 15.2265 15.7 15.0365 15.93 14.9165C16.16 14.7765 16.39 14.7065 16.64 14.7065C16.83 14.7065 17.03 14.7465 17.25 14.8365C17.47 14.9265 17.7 15.0565 17.95 15.2265L21.26 17.5765C21.52 17.7565 21.7 17.9665 21.81 18.2165C21.91 18.4665 21.97 18.7165 21.97 18.9965Z" fill="white" />
        </svg >
    )
}
export const EmailIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 17.3335H15C18 17.3335 20 15.8335 20 12.3335V5.3335C20 1.8335 18 0.333496 15 0.333496H5C2 0.333496 0 1.8335 0 5.3335V12.3335C0 15.8335 2 17.3335 5 17.3335ZM15.4681 6.41951C15.7917 6.16101 15.8445 5.68908 15.586 5.36543C15.3275 5.04178 14.8556 4.98897 14.5319 5.24748L11.4029 7.74673L11.4025 7.74699C10.6462 8.34886 9.3446 8.349 8.58797 7.7474L5.46898 5.24821C5.14573 4.9892 4.67372 5.04127 4.41471 5.36452C4.1557 5.68776 4.20778 6.15977 4.53102 6.41878L7.65102 8.91878L7.65287 8.92026C8.95626 9.95791 11.0337 9.95791 12.3371 8.92026L12.3381 8.91951L15.4681 6.41951Z" fill="white" />
        </svg>
    )
}
export const FacebookIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.469111 2.24594C0 3.14902 0 4.33546 0 6.70833V13.2917C0 15.6645 0 16.851 0.469111 17.7541C0.864425 18.5151 1.48493 19.1356 2.24594 19.5309C3.14902 20 4.33546 20 6.70833 20L8.33336 20V12.7778H5.83336V10H8.33336V7.77778C8.33336 5.27778 9.94447 3.88889 12.2222 3.88889C12.9445 3.88889 13.7222 4 14.4445 4.11111V6.66667H13.1667C11.9445 6.66667 11.6667 7.27778 11.6667 8.05556V10H14.3334L13.8889 12.7778H11.6667V20L13.2917 20C15.6645 20 16.851 20 17.7541 19.5309C18.5151 19.1356 19.1356 18.5151 19.5309 17.7541C20 16.851 20 15.6645 20 13.2917V6.70833C20 4.33546 20 3.14902 19.5309 2.24594C19.1356 1.48493 18.5151 0.864425 17.7541 0.469111C16.851 0 15.6645 0 13.2917 0H6.70833C4.33546 0 3.14902 0 2.24594 0.469111C1.48493 0.864425 0.864425 1.48493 0.469111 2.24594Z" fill="white" />
        </svg>
    )
}

export const PrevIcon = ({ className }: SvgProps) => (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 21L9.6 14L18 7" fill="currentColor" />
        <path d="M18 21L9.6 14L18 7L18 21Z" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const NextIcon = ({ className }: SvgProps) => (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 21L18.4 14L10 7" fill="currentColor" />
        <path d="M10 21L18.4 14L10 7L10 21Z" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CircleIcon: React.FC<SvgProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <g filter="url(#filter0_b_5884_980)">
            <circle cx="8" cy="8" r="8" fill="white" fillOpacity="0.3" />
            <circle cx="8" cy="8" r="7.5" stroke="#0054A6" />
        </g>
        <defs>
            <filter id="filter0_b_5884_980" x="-30" y="-30" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5884_980" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5884_980" result="shape" />
            </filter>
        </defs>
    </svg>
)


export const LogoDotIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17" fill="none">
            <path d="M22.6105 8.30527C22.6105 12.8921 18.8921 16.6105 14.3053 16.6105C9.7184 16.6105 6 12.8921 6 8.30527C6 3.7184 9.7184 0 14.3053 0C18.8921 0 22.6105 3.7184 22.6105 8.30527Z" fill="#0054A6" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.3053 16.2373C18.686 16.2373 22.2373 12.686 22.2373 8.30527C22.2373 3.92455 18.686 0.37327 14.3053 0.37327C9.92455 0.37327 6.37327 3.92455 6.37327 8.30527C6.37327 12.686 9.92455 16.2373 14.3053 16.2373ZM14.3053 16.6105C18.8921 16.6105 22.6105 12.8921 22.6105 8.30527C22.6105 3.7184 18.8921 0 14.3053 0C9.7184 0 6 3.7184 6 8.30527C6 12.8921 9.7184 16.6105 14.3053 16.6105Z" fill="white" />
            <path d="M10.3434 5.6062L1 10.5894L8.99382 8.09778L17.6105 11.1084L27.0578 6.12528L18.9601 8.72068L10.3434 5.6062Z" fill="white" stroke="#0054A6" strokeWidth="0.186635" strokeLinejoin="round" />
        </svg>
    )
}

export const PolygonIcon = ({ className }: SvgProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="386" height="106" viewBox="0 0 386 106" fill="none">
            <g filter="url(#filter0_bdi_272_68691)">
                <path d="M380.038 44.0196C382.357 46.9349 382.357 51.0651 380.038 53.9804L347.423 94.9804C345.905 96.8883 343.6 98 341.162 98L44.1071 98C41.6415 98 39.3137 96.8631 37.7978 94.9186L5.83453 53.9186C3.58023 51.027 3.58023 46.973 5.83453 44.0813L37.7978 3.08133C39.3137 1.13685 41.6415 -1.54409e-05 44.1071 -1.53492e-05L341.162 -4.30359e-06C343.6 -4.21294e-06 345.905 1.1117 347.423 3.01963L380.038 44.0196Z" fill="white" fillOpacity="0.7" shapeRendering="crispEdges" />
                <path d="M379.256 44.6422C381.285 47.1931 381.285 50.807 379.256 53.3578L346.64 94.3578C345.312 96.0273 343.295 97 341.162 97L44.1071 97C41.9497 97 39.9129 96.0052 38.5865 94.3038L6.6232 53.3038C4.65066 50.7736 4.65066 47.2264 6.6232 44.6962L38.5865 3.69616C39.9129 1.99474 41.9497 0.999985 44.1071 0.999985L341.162 0.999996C343.295 0.999996 345.312 1.97274 346.64 3.64217L379.256 44.6422Z" stroke="white" strokeWidth="2" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_bdi_272_68691" x="0.144043" y="-4" width="386.633" height="110" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_272_68691" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="effect1_backgroundBlur_272_68691" result="effect2_dropShadow_272_68691" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_272_68691" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_272_68691" />
                </filter>
            </defs>
        </svg>
    )
}

export const File: React.FC<SvgProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
        <g clipPath="url(#clip0_272_54101)">
            <path d="M33.0587 26.2449V16.5906C33.0587 15.7371 33.3978 14.9185 34.0013 14.315C34.6048 13.7115 35.4233 13.3724 36.2768 13.3724H68.458L84.5485 29.463V74.5166C84.5485 75.3701 84.2095 76.1886 83.6059 76.7921C83.0024 77.3956 82.1839 77.7347 81.3304 77.7347H71.6761" fill="#E1E1E1" />
            <path fillRule="evenodd" clipRule="evenodd" d="M68.458 90.6071H23.4044C22.5509 90.6071 21.7324 90.2681 21.1288 89.6646C20.5253 89.0611 20.1863 88.2425 20.1863 87.389V29.463C20.1863 28.6095 20.5253 27.791 21.1288 27.1875C21.7324 26.5839 22.5509 26.2449 23.4044 26.2449H55.5855L71.6761 42.3355V87.389C71.6761 88.2425 71.337 89.0611 70.7335 89.6646C70.13 90.2681 69.3115 90.6071 68.458 90.6071ZM34.0575 61.6441C34.0575 60.4184 35.0511 59.4247 36.2768 59.4247H55.5855C56.8112 59.4247 57.8049 60.4184 57.8049 61.6441C57.8049 62.8699 56.8112 63.8635 55.5855 63.8635H36.2768C35.0511 63.8635 34.0575 62.8699 34.0575 61.6441ZM36.2768 72.2972C35.0511 72.2972 34.0575 73.2908 34.0575 74.5166C34.0575 75.7423 35.0511 76.736 36.2768 76.736H55.5855C56.8112 76.736 57.8049 75.7423 57.8049 74.5166C57.8049 73.2908 56.8112 72.2972 55.5855 72.2972H36.2768Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_272_54101">
                <rect width="102.98" height="102.98" fill="white" transform="translate(0.877563 0.5)" />
            </clipPath>
        </defs>
    </svg>
)

export const GroupDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
        <path d="M24.5 12L13 22L1.5 12" stroke="#F0F0F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24.5 2L13 12L1.5 2" stroke="#F0F0F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M12 16.075C11.8667 16.075 11.7417 16.0543 11.625 16.013C11.5083 15.9717 11.4 15.9007 11.3 15.8L7.7 12.2C7.51667 12.0167 7.425 11.7833 7.425 11.5C7.425 11.2167 7.51667 10.9833 7.7 10.8C7.88333 10.6167 8.121 10.521 8.413 10.513C8.705 10.505 8.94234 10.5923 9.125 10.775L11 12.65V5.5C11 5.21667 11.096 4.979 11.288 4.787C11.48 4.595 11.7173 4.49934 12 4.5C12.2833 4.5 12.521 4.596 12.713 4.788C12.905 4.98 13.0007 5.21734 13 5.5V12.65L14.875 10.775C15.0583 10.5917 15.296 10.504 15.588 10.512C15.88 10.52 16.1173 10.616 16.3 10.8C16.4833 10.9833 16.575 11.2167 16.575 11.5C16.575 11.7833 16.4833 12.0167 16.3 12.2L12.7 15.8C12.6 15.9 12.4917 15.971 12.375 16.013C12.2583 16.055 12.1333 16.0757 12 16.075ZM6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V16.5C4 16.2167 4.096 15.979 4.288 15.787C4.48 15.595 4.71733 15.4993 5 15.5C5.28333 15.5 5.521 15.596 5.713 15.788C5.905 15.98 6.00067 16.2173 6 16.5V18.5H18V16.5C18 16.2167 18.096 15.979 18.288 15.787C18.48 15.595 18.7173 15.4993 19 15.5C19.2833 15.5 19.521 15.596 19.713 15.788C19.905 15.98 20.0007 16.2173 20 16.5V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6Z" fill="#0054A6" />
    </svg>
)

export const ArrowLeft: React.FC<SvgProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path className={className} d="M13 15L7 10L13 5" fill="" />
        <path className={className} d="M13 15L7 10L13 5L13 15Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
export const ArrowRight: React.FC<SvgProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path className={className} d="M7 15L13 10L7 5" fill="" />
        <path className={className} d="M7 15L13 10L7 5L7 15Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const Clock: React.FC<SvgProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8.00001 1.33337C4.32668 1.33337 1.33334 4.32671 1.33334 8.00004C1.33334 11.6734 4.32668 14.6667 8.00001 14.6667C11.6733 14.6667 14.6667 11.6734 14.6667 8.00004C14.6667 4.32671 11.6733 1.33337 8.00001 1.33337ZM10.9 10.38C10.8666 10.4369 10.8223 10.4865 10.7696 10.526C10.7169 10.5655 10.6568 10.5942 10.5929 10.6103C10.529 10.6264 10.4626 10.6297 10.3974 10.6199C10.3323 10.6102 10.2697 10.5875 10.2133 10.5534L8.14668 9.32004C7.63334 9.01337 7.25334 8.34004 7.25334 7.74671V5.01337C7.25334 4.74004 7.48001 4.51337 7.75334 4.51337C8.02668 4.51337 8.25334 4.74004 8.25334 5.01337V7.74671C8.25334 7.98671 8.45334 8.34004 8.66001 8.46004L10.7267 9.69337C10.9667 9.83337 11.0467 10.14 10.9 10.38Z" fill="#A3A3A3" />
    </svg>
)
export const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
        <path d="M1 1H17M1 7H17M1 13H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const Close = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3.28571 3.28577L14.7143 14.7143M14.7143 3.28577L3.28571 14.7143" stroke="#0054A6" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

export const AngleLeft: React.FC<SvgProps> = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.08331 10.6667L11.8333 15.3333C12.1666 15.6667 12.6666 15.6667 13 15.3333C13.3333 15 13.3333 14.5 13 14.1667L8.91665 9.99999L13 5.83332C13.3333 5.49999 13.3333 4.99999 13 4.66666C12.8333 4.49999 12.6666 4.41666 12.4166 4.41666C12.1666 4.41666 12 4.49999 11.8333 4.66666L7.08331 9.33332C6.74998 9.74999 6.74998 10.25 7.08331 10.6667C7.08331 10.5833 7.08331 10.5833 7.08331 10.6667Z" fill="#666666" />
    </svg>
)
export const AngleRight: React.FC<SvgProps> = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.95 9.40832L8.23334 4.69999C8.15587 4.62188 8.0637 4.55989 7.96215 4.51758C7.8606 4.47527 7.75168 4.45349 7.64167 4.45349C7.53166 4.45349 7.42274 4.47527 7.32119 4.51758C7.21964 4.55989 7.12747 4.62188 7.05001 4.69999C6.8948 4.85613 6.80768 5.06734 6.80768 5.28749C6.80768 5.50764 6.8948 5.71885 7.05001 5.87499L11.175 10.0417L7.05001 14.1667C6.8948 14.3228 6.80768 14.534 6.80768 14.7542C6.80768 14.9743 6.8948 15.1855 7.05001 15.3417C7.12718 15.4204 7.21922 15.483 7.32078 15.526C7.42235 15.5689 7.53142 15.5912 7.64167 15.5917C7.75193 15.5912 7.861 15.5689 7.96256 15.526C8.06412 15.483 8.15616 15.4204 8.23334 15.3417L12.95 10.6333C13.0346 10.5553 13.1021 10.4606 13.1483 10.3552C13.1944 10.2497 13.2183 10.1359 13.2183 10.0208C13.2183 9.90574 13.1944 9.7919 13.1483 9.68648C13.1021 9.58107 13.0346 9.48636 12.95 9.40832Z" fill="#666666" />
    </svg>
)

export const Attached: React.FC<SvgProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11.5 22C9.96667 22 8.66667 21.4667 7.6 20.4C6.53333 19.3333 6 18.0333 6 16.5V6C6 4.9 6.39167 3.95833 7.175 3.175C7.95833 2.39167 8.9 2 10 2C11.1 2 12.0417 2.39167 12.825 3.175C13.6083 3.95833 14 4.9 14 6V15.5C14 16.2 13.7583 16.7917 13.275 17.275C12.7917 17.7583 12.2 18 11.5 18C10.8 18 10.2083 17.7583 9.725 17.275C9.24167 16.7917 9 16.2 9 15.5V6H10.5V15.5C10.5 15.7833 10.596 16.021 10.788 16.213C10.98 16.405 11.2173 16.5007 11.5 16.5C11.7833 16.5 12.021 16.404 12.213 16.212C12.405 16.02 12.5007 15.7827 12.5 15.5V6C12.5 5.3 12.2583 4.70833 11.775 4.225C11.2917 3.74167 10.7 3.5 10 3.5C9.3 3.5 8.70833 3.74167 8.225 4.225C7.74167 4.70833 7.5 5.3 7.5 6V16.5C7.5 17.6 7.89167 18.5417 8.675 19.325C9.45833 20.1083 10.4 20.5 11.5 20.5C12.6 20.5 13.5417 20.1083 14.325 19.325C15.1083 18.5417 15.5 17.6 15.5 16.5V6H17V16.5C17 18.0333 16.4667 19.3333 15.4 20.4C14.3333 21.4667 13.0333 22 11.5 22Z" fill="#0054A6" />
    </svg>
)