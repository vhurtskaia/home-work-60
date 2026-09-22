/**
 * Article Routes
 * Визначає всі маршрути для статей
 */

const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

// Маршрути для /articles
router.get('/', articleController.getAllArticles);
router.post('/', articleController.createArticle);

// Маршрути для /articles/:articleId
router.get('/:articleId', articleController.getArticleById);
router.put('/:articleId', articleController.updateArticleById);
router.delete('/:articleId', articleController.deleteArticleById);

module.exports = router;
