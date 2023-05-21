const routes = [
    // Path /
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // console.log(request.route.method);
            return 'Homepage';
        }
    },
    {
        method: '*', // any method
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    // Path /about
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        }
    },
    {
        method: '*', // any method
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    // Path /users/
    {
        method: 'GET', // any method
        path: '/users/{username?}', // Opsional Parameter ?
        handler: (request, h) => {
            // const { username } = request.params;
            // return `Hello, ${username}!`;

            const { username = 'stranger' } = request.params;

            return `Hello, ${username}!`;
        }
    },
    // Path /hello/
    {
        method: 'GET', // any method
        path: '/hello/{name?}', // Opsional Parameter ?
        handler: (request, h) => {
            const { name = 'stranger' } = request.params;
            const { lang } = request.query;

            if (lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        }
    },
    // Path /login
    {
        method: 'POST', // any method
        path: '/login', // Opsional Parameter ?
        handler: (request, h) => {
            const { username, password } = request.payload;

            return `Welcome ${username}!`;
        }
    },
    // Path other
    {
        method: '*', // any method
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
];

module.exports = routes;