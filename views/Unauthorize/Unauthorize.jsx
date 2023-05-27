import { useNavigate } from 'react-router-dom';

function Unauthorized() {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <section>
            <h1>Unauthorize</h1>
            <br />
            <p>You don not have access to the requested page.</p>
            <div className='flexGrow'>
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized;