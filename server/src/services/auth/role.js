import HTTPStatus from "http-status";

export const sellerRole = async (req, res, next) => {
  if (!req.user) {
    return res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }

  if (
    !req.user.role ||
    (req.user.role !== "SELLER" && req.user.role !== "ADMIN")
  ) {
    return res.sendStatus(HTTPStatus.UNAUTHORIZED);
  }

  return next();
};
