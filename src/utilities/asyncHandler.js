const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve().catch((error) => next(error))
    }
}



export { asyncHandler }

// AsyncHandler using Try/Catch

// const asyncHandler = (fn) => await (req, res, next) => {
//     try {
//         await fn (req, res, next)   // no other params?
//     } catch (error) => {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
