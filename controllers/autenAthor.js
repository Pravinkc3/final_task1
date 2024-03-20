const jwt = require('jsonwebtoken');

async function authandicate(req,res,next){

        const authHeader = req.header('Authorization');
        const token = authHeader.split(' ')[1];

        if (!token) {
            res.status(401).send('Access Denied')
        }
        try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userMail = decoded ;

        console.log("decoded:",decoded);

        next();

    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}





const isAuthorization = (...roles) => {
    return (req, res, next) => {
        try {
            // console.log("++++++++>"+req.userMail.role);
            // console.log(roles);
            // console.log('response :'+ roles.includes(req.userMail.role));
            if (!roles.includes(req.userMail.role)) {
                return res.status(403).send({
                    message : 'you are not Authorized to access'
                })
            }else{
                next()
            }
            // next();
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    };
};

module.exports = { isAuthorization,authandicate };