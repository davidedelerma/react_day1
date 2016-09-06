var React = require ('react')
var Header = require('./Header')
var MovieTable = require('./MovieTable')
var MoreLink = require('./MoreLink')
var ShowTimesButton = require('./ShowTimesButton')

var sampleData=[
{id: 1, title: "The Man Who Fell to Earth", url: "http://www.imdb.com/title/tt0074851?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0"},
{id: 2, title: "Don't Breathe", url: "http://www.imdb.com/title/tt4160708?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1"},
{id: 3, title: "  Kubo and the Two Strings", url: "http://www.imdb.com/title/tt4160708?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t2"},
{id: 4, title: "Ben-Hur", url: "http://www.imdb.com/title/tt4160708?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t3"},
{id: 5, title: "Hell or High Water", url: "http://www.imdb.com/title/tt4160708?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t4"},
{id: 6, title: "Captain Fantastic", url: "http://www.imdb.com/title/tt3553976?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t5"},
{id: 7, title: "Anthropoid", url: "http://www.imdb.com/title/tt4190530?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1QTMQ06PJ1TAW5JJ3D4A&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t6"}
]

var OpeningsBox = React.createClass({


  getInitialState: function(){
    return {data: sampleData}
  },

  handleClick:function(){
    console.log('handling the click')
  },

  render: function(){
    return(
        <div className = 'openings-box'>
          <Header title='UK Openings this week' />
          <MovieTable movies = {this.state.data} />
          <MoreLink />
          <ShowTimesButton handleClick = {this.handleClick} />

        </div>
      )
  }


})

module.exports = OpeningsBox