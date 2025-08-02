
import './login.css'


export function Login(){
    return(
        <>
            <form className='rounded rounded-4 loginform'>
                <h1 className='bi bi-person-circle loginh1'> User Login</h1>
                <dl id='logindl'>
                    <dt id='logindt'>User Name</dt>
                    <dd id='logindd'><input type="text" /></dd>
                    <dt id='logindt'>Password</dt>
                    <dd id='logindd'><input type="password" /></dd>
                </dl>
                <button id='loginbtn'>Login</button>
            </form>
        </>
    )
}