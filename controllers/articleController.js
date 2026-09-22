/**
 * Article Controller
 * Обробляє всі запити, пов'язані зі статтями
 */

// GET /articles - отримання всіх статей
exports.getAllArticles = (req, res) => {
  res.send('Get articles route');
};

// POST /articles - створення нової статті
exports.createArticle = (req, res) => {
  res.send('Post articles route');
};

// GET /articles/:articleId - отримання статті за ID
exports.getArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Get article by Id route: ${articleId}`);
};

// PUT /articles/:articleId - оновлення статті за ID
exports.updateArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Put article by Id route: ${articleId}`);
};

// DELETE /articles/:articleId - видалення статті за ID
exports.deleteArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Delete article by Id route: ${articleId}`);
};
