//Nếu chưa Login thì trở về trang đăng nhập

module.exports = (req, res, next) => {
  if (req.session.role == "customer") {
    return res.redirect("/");
  }
  next();
};

