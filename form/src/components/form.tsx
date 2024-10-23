

const Form = () =>{
    return(
        <form>
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome"></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Insira seu melhor e-mail"></input>
            </div>
            <div>
                <a href="#">Leia os termos</a>
                <div>
                    <input type="checkbox" />
                    <label>Concordo com os termos</label>
                </div>
            </div>
            <button>Cadastrar</button>
        </form>
    )
}
export default Form