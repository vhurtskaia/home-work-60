/**
 * User Controller
 * Обробляє всі запити, пов'язані з користувачами
 */

// GET /users - отримання всіх користувачів
exports.getAllUsers = (req, res) => {
  res.send('Get users route');
};

// POST /users - створення нового користувача
exports.createUser = (req, res) => {
  res.send('Post users route');
};

// GET /users/:userId - отримання користувача за ID
exports.getUserById = (req, res) => {
  const { userId } = req.params;
  res.send(`Get user by Id route: ${userId}`);
};

// PUT /users/:userId - оновлення користувача за ID
exports.updateUserById = (req, res) => {
  const { userId } = req.params;
  res.send(`Put user by Id route: ${userId}`);
};

// DELETE /users/:userId - видалення користувача за ID
exports.deleteUserById = (req, res) => {
  const { userId } = req.params;
  res.send(`Delete user by Id route: ${userId}`);
};
