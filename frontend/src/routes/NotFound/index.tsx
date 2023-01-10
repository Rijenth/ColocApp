// using mantine and redux we will create a new component

import { useParams } from "react-router-dom";

// inner components
import {Error404} from "./components/Error404";

export default function NotFound() {
    const { parms } = useParams();
    return <div>
        <Error404 />
    </div>;
}