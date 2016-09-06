var React = require('react')

var ShowTimesButton = function(props){

  return(
      <div className= 'show-times'>
        <button className='btn-show-times' oncClick={props.handleClick}>Get Show Times >>
        </button>
      </div>
    )
}

module.exports = ShowTimesButton