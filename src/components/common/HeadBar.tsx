import { ToggleDarkMode } from "@components/settings/ToggleDarkMode";
import { Link } from "react-router-dom";

export function HeadBar() {
    return (
        <div className="bg-headbar text-headbar flex justify-center">
            <div className="flex-1">
                <div className="p-2 pl-6">
                    <Link to="/">
                        <span className="font-bold">
                            INICIO
                        </span>
                    </Link>
                </div>
            </div>
            <div className="p-2">
                <Link to="/explore">
                    <span className="font-bold">
                        EXPLORE
                    </span>
                </Link>
            </div>
            <div className="flex-1 flex justify-end">
                <div className="my-auto p-2 pr-6">
                    <Link to="/account">
                        <span className="font-bold">
                            ACCOUNT
                        </span>
                    </Link>
                </div>
                <ToggleDarkMode />
            </div>
        </div>
    );
}
