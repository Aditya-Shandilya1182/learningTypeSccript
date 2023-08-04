interface User{
    readonly id : number,
    email : string,
    userId : number,
    googleId ? : string,
    startTrail : () => string,
    getCoupon : (couponName : string) => number
}

const Travis: User ={ id: 4321, email: 't@t.com', userId: 1234, startTrail: () => {
    return 'Trail Started';
}, 
getCoupon : () => {
    return 10;
}}

