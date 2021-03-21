import React, { useState, useCallback } from 'react';
import {Route} from 'react-router-dom';
import NewsPage from "./components/NewsPage";

// API KEY = 14d1d58062844f19a60e8f83399a1a01

/**
 * API
 * get all news
 * GET https://newsapi.org/v2/top-headlines?country=kr&apiKey=14d1d58062844f19a60e8f83399a1a01
 *
 * get certain category news
 * GET https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=14d1d58062844f19a60e8f83399a1a01
 *
 */

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;