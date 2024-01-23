import { SetApiKey } from "@components/ai/SetApiKey";
import { useAppSelector } from "@store/hooks";
import { ChatBot } from "./chatBot/ChatBot";

export function AIPlayground() {
    const apiKey = useAppSelector((state) => state.aiPlayground.apiKey);

    return (<>
        <SetApiKey />
        {apiKey && (<ChatBot />)}
    </>);
}
