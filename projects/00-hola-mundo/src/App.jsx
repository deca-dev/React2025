import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"


const users = [
    {
        userName: "midudev",
        name: "Miguel Ángel",
        isFollowing: false
    },
      {
        userName: "pherablb",
        name: "Fernando Ralbean",
        isFollowing: true
    },
      {
        userName: "tmchein",
        name: "Tomás Allende Angel",
        isFollowing: false
    },
    {
        userName: "fcohdz",
        name: "Francisco Hernández",
        isFollowing: false   
    }

];

export function App ()
{
    return(
       <section className="App">
        {
            users.map (user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    name= {name}
                    key={userName}
                    />
                )
            })
        }
       </section>
    )
}