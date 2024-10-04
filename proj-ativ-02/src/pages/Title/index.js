import "./title.css"
import FeaturedTitle from "../../components/FeaturedTitle"
import CategoryTitles from "../../components/CategoryTitles"

const Title = () => {
    const movie = {
        title: "Como eu era antes de você",
        thumbnail: "https://s2-gshow.glbimg.com/_QkIaMYq4Lx8R01Qi25L8E1-Y30=/0x0:1600x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/b/G/GC1KnmSoCBLhHvm2sIGQ/como-eu-era-antes-de-voce-atores-mostra-amizade-em-fotos-divertidas-nos-bastidores-1-.jpg",
        description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
        link: "/title/12345"
    }

    const movies = [
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
                {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        }
    ]

    return (
        <div className="Title navigation-fixed">
            <main>
                <FeaturedTitle title={movie.title} description={movie.description} thumbnail={movie.thumbnail} link={movie.link} />
                <div className="FeaturedDetails">
                    <div className="details-group">
                        <h5 className="title">Produção</h5>
                        <ul>
                            <li><strong>Local:</strong> Inglaterra</li>
                            <li><strong>Ano:</strong> 2017</li>
                            <li><strong>Direção:</strong> Gerard Padieux</li>
                            <li><strong>Estúdio:</strong> Warner Bros</li>
                        </ul>
                    </div>
                    <div className="details-group">
                        <h5 className="title">Mídia</h5>
                        <ul>
                            <li><strong>Local:</strong> Inglaterra</li>
                            <li><strong>Ano:</strong> 2017</li>
                            <li><strong>Direção:</strong> Gerard Padieux</li>
                            <li><strong>Estúdio:</strong> Warner Bros</li>
                        </ul>
                    </div>
                    <div className="details-group has-thumbnail">
                        <h5 className="title">Elenco</h5>
                        <ul>
                            <li>
                                <img src="https://s2.glbimg.com/i8IEg2L0u6LBfWcwGE_2NWOURiM=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/C/wEyYW5TQmgxq7SVVB0cg/2020-04-21-emily-blunt.jpeg" alt="Foto do elenco" />
                                <div>
                                    <strong>Emília Clark</strong>
                                    <span>Emily Blunt</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://s2.glbimg.com/i8IEg2L0u6LBfWcwGE_2NWOURiM=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/C/wEyYW5TQmgxq7SVVB0cg/2020-04-21-emily-blunt.jpeg" alt="Foto do elenco" />
                                <div>
                                    <strong>Emília Clark</strong>
                                    <span>Emily Blunt</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://s2.glbimg.com/i8IEg2L0u6LBfWcwGE_2NWOURiM=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/C/wEyYW5TQmgxq7SVVB0cg/2020-04-21-emily-blunt.jpeg" alt="Foto do elenco" />
                                <div>
                                    <strong>Emília Clark</strong>
                                    <span>Emily Blunt</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://s2.glbimg.com/i8IEg2L0u6LBfWcwGE_2NWOURiM=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/C/wEyYW5TQmgxq7SVVB0cg/2020-04-21-emily-blunt.jpeg" alt="Foto do elenco" />
                                <div>
                                    <strong>Emília Clark</strong>
                                    <span>Emily Blunt</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://s2.glbimg.com/i8IEg2L0u6LBfWcwGE_2NWOURiM=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/C/wEyYW5TQmgxq7SVVB0cg/2020-04-21-emily-blunt.jpeg" alt="Foto do elenco" />
                                <div>
                                    <strong>Emília Clark</strong>
                                    <span>Emily Blunt</span>
                                </div>
                            </li>
                            <li>
                                <img src="https://s2.glbimg.com/i8IEg2L0u6LBfWcwGE_2NWOURiM=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/C/wEyYW5TQmgxq7SVVB0cg/2020-04-21-emily-blunt.jpeg" alt="Foto do elenco" />
                                <div>
                                    <strong>Emília Clark</strong>
                                    <span>Emily Blunt</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <CategoryTitles movies={movies}>Filmes similares que você pode gostar</CategoryTitles>
            </main>
        </div>
    )
}

export default Title