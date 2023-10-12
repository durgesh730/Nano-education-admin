import { useState } from "react"
import ProfileDetails from "./Details/ProfileDetails";
import MorePhotos from "./Photos/MorePhotos";
import Single from "./SinglePhoto/Single";
import ProfileTable from "./Table/ProfileTable";

const Profile = () => {
    const [active, setActive] = useState("ProfileTable");

    return (
        <>
            {active === "ProfileTable" ? <ProfileTable setActive={setActive} /> : ""}
            {active === "ProfileDetails" ? <ProfileDetails setActive={setActive} /> : ""}
            {active === "MorePhotos" ? <MorePhotos setActive={setActive} /> : ""}
            {active === "Single" ? <Single setActive={setActive} /> : ""}
        </>
    )
}

export default Profile