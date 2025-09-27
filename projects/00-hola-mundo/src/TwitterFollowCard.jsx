export function TwitterFollowCard({userName, name, isFollowing, formatUserName}) {

    return(
      <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" 
                src={`https://unavatar.io/${userName}`}
                alt="Avatar" />
                <div>
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}