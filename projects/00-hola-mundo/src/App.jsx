import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App ()
{
    const formatUserName = (userName) => `@${userName}`;

    return(
       <section className="App">
        <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={true} userName="midudev" name="Miguel Angel"/>
        <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={false} userName="pheralb" name="Pheralbs"/>
        <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={true} userName="elonmusk" name="Elon Musk"/>
        <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={false} userName="vanderhart" name="Luis Fernández"/>
       </section>
    )
}