//  Instead of writing try catch again and again, we have reused it by writing it separately.
const secretKey = 'secretkey1998'

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next)
}