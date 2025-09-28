"use client"

import { useRouter } from "next/navigation";

const PropertyDetailsPage = () => {
    const router = useRouter();
    return (
        <div className="bg-pink-200 p-5">
            Property Details
            <button className="block mt-5 bg-blue-500" onClick={() => router.push( "/" )}>
                Click
            </button>
        </div>
    );
}

export default PropertyDetailsPage;