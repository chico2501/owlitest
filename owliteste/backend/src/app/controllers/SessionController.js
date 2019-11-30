import jwt from "jsonwebtoken";

import User from "../models/User";
import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username, password } });

    if (!user) {
      return res.status(401).json({ error: "Usuário ou senha incorretos." });
    }

    const { id, email, address, cellphone } = user;

    return res.json({
      user: {
        id,
        username,
        email,
        address,
        cellphone
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
