import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

const ConnectList = ({ articles }) => {
  return (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

const List = connect(mapStateToProps)(ConnectList);

export default List;
