import React, {Component} from 'react';
import './discover.scss';
import DISCOVER from './discoverdata';
import CountUp from 'react-countup';
import FilterSearch from '../../components/FilterSearch';


class Discover extends Component {
  state = {
    discover: DISCOVER,
    search: ''
  }


  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  
  render() {

  const { discover, search } = this.state
  const filtered = discover.filter(lang => {
    return lang.language.toLowerCase().includes(search.toLowerCase());
  })

  return (
  <>
  <section>
   <FilterSearch search={search} onChange={this.handleChange} />
   <div className="discover_container">
    {
      filtered.map(talent => (
      <div key={talent.id} className="info">
      <span>{talent.icon}</span>

      <div className="text-left talent_info">
      <h5>{talent.name}</h5>
      <h6>Language: {talent.language}</h6>
      <p>Rating: <CountUp end={talent.rate} duration={5} className="countup" />%</p>
      </div>
      </div>
      ))   
    }   
  </div>  
  </section>   
  </>
  )
}
}

export default Discover

