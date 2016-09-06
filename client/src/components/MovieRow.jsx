var React = require('react')

var MovieRow = function(props){

  return(
    <div className='movie-row'>
    <a href= {props.movie.url}> {props.movie.title} </a>
    </div>
    )
}

module.exports = MovieRow
