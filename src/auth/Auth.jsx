let jwt = require('jsonwebtoken');

class Auth{

    login(data, callback){
        let res = "";
        if(data && !data.error && data.data && data.data.status === 200){
            res = "SUCCESS";    
            localStorage.setItem('@Sorocaps:user', data.data.data.data.user.name);
            localStorage.setItem('@Sorocaps:userID', data.data.data.data.user.id);
            localStorage.setItem('@Sorocaps:token', data.data.data.data.token);
            localStorage.setItem('@Sorocaps:authenticated', true);
            this.authenticated = true;
        }else{
            res = "ERROR";
        }
        callback(res);
    }

    logout(cb){
        localStorage.removeItem('@Sorocaps:token', false);
        localStorage.removeItem('@Sorocaps:authenticated', false);
        localStorage.removeItem('@Sorocaps:user', false);
        localStorage.removeItem('@Sorocaps:userID', false);
        cb();
    }

    verifyToken(token){
        jwt.verify(token, 'SOR@2020$inf@', function(err, decoded) {
            if (err) {
                localStorage.removeItem('@Sorocaps:token', false);
                localStorage.removeItem('@Sorocaps:authenticated', false);
                localStorage.removeItem('@Sorocaps:user', false);
                localStorage.removeItem('@Sorocaps:userID', false);
                return false;
            }else{
                return true
            }
        });
    }

    isAuthenticated(){
        this.verifyToken(localStorage.getItem('@Sorocaps:token'));
        return localStorage.getItem('@Sorocaps:authenticated');
    }
}

export default new Auth();