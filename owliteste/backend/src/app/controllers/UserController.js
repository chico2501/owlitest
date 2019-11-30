import User from "../models/User";

class UserController {
  async store(req, res) {
    const { id, username, address, cellphone, email } = await User.create(
      req.body
    );

    return res.json({
      id,
      username,
      address,
      cellphone,
      email
    });
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async update(req, res) {
    const verifyUser = await User.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!verifyUser) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const user = await User.findByPk(req.params.id);

    user.updated_at = new Date();

    const { username, address, cellphone, email, password } = await user.update(
      req.body
    );

    return res.json({ username, address, cellphone, email, password });
  }

  async delete(req, res) {
    const verifyUser = await User.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!verifyUser) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const user = await User.findByPk(req.params.id);

    await user.destroy();

    return res.json({ message: "Usuário excluído com sucesso" });
  }
}

export default new UserController();
