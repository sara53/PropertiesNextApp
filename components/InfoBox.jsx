import Link from "next/link";

const InfoBox = ( { heading, children, bgColor = "bg-gray-100", textColor, buttonInfo } ) => {
    return (
        <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="mt-2 mb-4">
                {children}
            </p>
            <Link
                href={buttonInfo.link}
                className={`${buttonInfo.bgColor} inline-block  text-white rounded-lg px-4 py-2 `}
            >
                {buttonInfo.text}
            </Link>
        </div>
    );
}

export default InfoBox;