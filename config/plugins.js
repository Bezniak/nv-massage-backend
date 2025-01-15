// module.exports = ({ env }) => ({
//     // ...
//     "users-permissions": {
//         config: {
//             register: {
//                 allowedFields: ["userphone"],
//             },
//         },
//     },
//     // ...
// });


module.exports = ({env}) => ({
    "users-permissions": {
        config: {
            register: {
                allowedFields: ["userphone"],
            },
            jwtSecret: env('JWT_SECRET'),
        },
    },
});

