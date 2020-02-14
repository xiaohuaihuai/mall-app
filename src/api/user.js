const userList = [
    {
        username: '15261471747',
        password: '123456',
        authToken: 'authToken15261471747'
    }
]

export function register(registerReq) {
    const user = {
        username: registerReq.username,
        password: registerReq.password,
        authToken: 'authToken'+registerReq.username
    }
    userList.push(user)
    return {
        code: 200,
        message: '注冊成功！'
    };
}

export function login(loginReq) {
    const filteredUserList = userList.filter(user => user.username === loginReq.username)
    if (filteredUserList.length === 0){
        return {
            code: 500,
            message: '用户名或者密码不正确！'
        };
    } else if (filteredUserList.length === 1){
        if (filteredUserList[0].password !== loginReq.password){
            return {
                code: 500,
                message: '用户名或者密码不正确！'
            };
        } else {
            return {
                code: 200,
                message: '登录成功！',
                data: filteredUserList[0].authToken
            };
        }
    }
}
