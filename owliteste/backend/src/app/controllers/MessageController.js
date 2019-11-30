import User from "../models/User";
import Message from "../schemas/Message";

class MessageController {
  async store(req, res) {
    const { content } = req.body;
    const user_id = req.params.id;
    const { username } = req.headers;

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const message = await Message.create({
      content,
      username: username,
      user_id: user_id
    });

    return res.json(message);
  }

  async index(req, res) {
    const messages = await Message.find();

    return res.json(messages);
  }
}

export default new MessageController();
