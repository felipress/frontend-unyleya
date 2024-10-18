import CollectionList from "../../components/CollectionList"
import {Link}  from "react-router-dom"

const Home = () => {
    const items = [
        {
            photo: "https://randomwordgenerator.com/img/picture-generator/57e0d4474354ae14f1dc8460962e33791c3ad6e04e5074417d2e72d1964dc6_640.jpg",
            registerNumber: "MA21 QAD",
            name: "A menina dos olhos de ouro",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nibh et nisi ullamcorper lacinia. Ut eget faucibus tellus. Duis varius enim nec eros venenatis luctus. Etiam eget bibendum justo.",
            _id: "12345678"
        },
        {
            photo: "https://randomwordgenerator.com/img/picture-generator/52e3d7434b51aa14f1dc8460962e33791c3ad6e04e5074417c2f7cd3944dc4_640.jpg",
            registerNumber: "MA21 QAD",
            name: "Este é o objeto teste 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nibh et nisi ullamcorper lacinia. Ut eget faucibus tellus. Duis varius enim nec eros venenatis luctus. Etiam eget bibendum justo.",
            _id: "12345678"
        },
        {
            photo: "https://randomwordgenerator.com/img/picture-generator/51e6d14b4c56b10ff3d8992cc12c30771037dbf852547940762b7adc904f_640.jpg",
            registerNumber: "MA21 QAD",
            name: "Este é o objeto de teste 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nibh et nisi ullamcorper lacinia. Ut eget faucibus tellus. Duis varius enim nec eros venenatis luctus. Etiam eget bibendum justo.",
            _id: "12345678"
        },
        {
            photo: "https://randomwordgenerator.com/img/picture-generator/princess-2483942_640.jpg",
            registerNumber: "MA21 QAD",
            name: "Este é o objeto teste 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nibh et nisi ullamcorper lacinia. Ut eget faucibus tellus. Duis varius enim nec eros venenatis luctus. Etiam eget bibendum justo.",
            _id: "12345678"
        },
        {
            photo: "https://randomwordgenerator.com/img/picture-generator/52e0d7414a5aad14f1dc8460962e33791c3ad6e04e507440712f7bd6954bc5_640.jpg",
            registerNumber: "MA21 QAD",
            name: "Este é o objeto de teste 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nibh et nisi ullamcorper lacinia. Ut eget faucibus tellus. Duis varius enim nec eros venenatis luctus. Etiam eget bibendum justo.",
            _id: "12345678"
        },
        {
            photo: "https://randomwordgenerator.com/img/picture-generator/odd-socks-4424190_640.jpg",
            registerNumber: "MA21 QAD",
            name: "Este é o objeto teste 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis nibh et nisi ullamcorper lacinia. Ut eget faucibus tellus. Duis varius enim nec eros venenatis luctus. Etiam eget bibendum justo.",
            _id: "12345678"
        }
    ]
    
    return (
        <div>
            <CollectionList data={items} />
            <div className="my-6 flex justify-end gap-4">
                <Link to="/" className="block px-5 py-3 rounded text-center font-semibold text-orange-500 border border-solid border-orange-500 hover:bg-orange-50">Página anterior</Link>
                <Link to="/" className="block px-5 py-3 rounded text-center font-semibold text-white bg-orange-500 hover:bg-orange-600">Próxima página</Link>
            </div>
        </div>
    )
}

export default Home