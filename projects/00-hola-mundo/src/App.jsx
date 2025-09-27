import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App ()
{
    const formatUserName = (userName) => `@${userName}`;

    return(
       <section className="App">
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="midudev" name="Miguel Angel"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="pheralb" name="Pheralbs"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="elonmusk" name="Elon Musk"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="vanderhart" name="Luis Fernández"/>
       </section>
    )
}