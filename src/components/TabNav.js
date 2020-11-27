import React from 'react';


class TabNav extends React.Component {
    
  render() {
    return (
        <div style={{ width: '30%' }}>
        <ul className="nav nav-tabs">
            
        {
  this.props.tabs.map(slectedTab => {
              const active = (slectedTab === this.props.selected ? 'active ' : '' );
    return (
      <li className="nav-item" key={ slectedTab }>
        <a className={"nav-link " + active + slectedTab} onClick={ () => this.props.slectedTab}>
          { slectedTab }
        </a>
      </li>
    );
  })
  
}   
   
        </ul>
        { this.props.children }
      </div>
    );
  }
}
export default TabNav;