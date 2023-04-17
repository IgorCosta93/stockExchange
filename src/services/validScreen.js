let jwt = require('jsonwebtoken');

export function validScreen(screen){
    let authorized = false;
    
    if(screen === 'ALL_USERS') return true

    jwt.verify(localStorage.getItem('@Sorocaps:token'), 'SOR@2020$inf@', function(err, decoded) {
        let data = decoded.screens.filter(s => s.tela === screen)
        if(data.length > 0 || decoded.adm) authorized = true
    });
    
    return authorized
}
