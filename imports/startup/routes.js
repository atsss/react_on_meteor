import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// route components
import App from '../ui/App';
import QuestionIndex from '../ui/QuestionIndex';
import NewQuestion from '../ui/NewQuestion';
import QuestionDetail from '../ui/QuestionDetail';
import AnswerIndex from '../ui/AnswerIndex';
import NewAnswer from '../ui/NewAnswer';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/questions" component={QuestionIndex}/>
        <Route path="/questions/:id" component={QuestionDetail}>
          <Route path="/questions/:id/answers" component={AnswerIndex}/>
          <Route path="/questions/:id/answers/new" component={NewAnswer}/>
        </Route>
      <Route path="/new" component={NewQuestion}/>
    </Route>
  </Router>
);
