import React, {Component} from 'react';
import './discover.scss';
import DISCOVER from './discoverdata';
import CountUp from 'react-countup';
import FilterSearch from '../../components/FilterSearch';


class Discover extends Component {
  state = {
    discover: DISCOVER
  }

  render() {
    const { discover } = this.state
  return (
  <>
  <section>
   <FilterSearch />
   <div className="discover_container">
    {
      discover.map(talent => (
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

