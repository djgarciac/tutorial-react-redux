import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getData } from '../js/actions'

const mapStateToProps = (state) => {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
};

const Post = ({ articles, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <ul>
      {articles && articles.map((el, id) => (
        <li key={id}>{el.title}</li>
      ))}
    </ul>
  );
};

export default connect(
  mapStateToProps,
  { getData }
)(Post);
