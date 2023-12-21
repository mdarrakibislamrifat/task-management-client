import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import animate from "../../assets/sssssss.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div >
            <Helmet>
                <title>Error Page</title>
            </Helmet>

            <div>
            <Lottie i lottie-react animationData={animate}></Lottie>
            </div>
            <div className='flex justify-center'>
                <Link to='/'><button className='btn btn-primary'>Go back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;