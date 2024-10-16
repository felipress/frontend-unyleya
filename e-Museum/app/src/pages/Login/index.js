import brand from "../../assets/brand.svg"
import abaporu from "../../assets/abaporu.jpg"
const Login = () => {
    return (
        <div className="grow flex border-box min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-orange-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-7 w-auto" src={brand} alt="e-Museum" />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-xl">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" className="block text-sm font-medium leading-3 text-gray-900">E-mail</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-2 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="password" className="block text-sm font-medium leading-3 text-gray-900">Senha</label>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-2 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div className="flex py-2 justify-end">
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-amber-600 hover:text-amber-500">Esqueceu a senha?</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login