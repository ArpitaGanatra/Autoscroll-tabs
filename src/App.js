import React from 'react';
import './App.css';
import TabNav from './components/TabNav';
import Tab from './components/Tab';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeToNextTab = this.changeToNextTab.bind(this);
    this.timeinterval = this.timeinterval.bind(this);
    this.state = {
      selected: 'Home'
    }
    
  }
  // setSelected = (tab) => {
  //   this.setState({ selected: tab });
    
  // }
  selectNewTab(slectedTab){
    this.tabs.forEach(tab=>{
      tab.isActive = (tab.name === slectedTab.name)
    })
  }

  componentDidMount(){
    this.timeinterval()
    
  }

  timeinterval = () => {
    setInterval(()=>{
      this.changeToNextTab();
    } , 5000);
  }

  changeToNextTab = () => {
    let activeIndex = this.tabs.findIndex(slectedTab => slectedTab.isActive);
    if (activeIndex === -1) {
      activeIndex = 0;
  } 
  else{activeIndex++;}


        if (activeIndex >= this.tabs.length) {
            // Reset to first tab if on the last tab
            activeIndex = 0;
        }

        this.selectNewTab(this.tabs[activeIndex]);

  }

  

  render() {
    
    return (
      <div className="App mt-4">
        <TabNav tabs={['Home', 'Settings', 'Profile']} selected={ this.state.selected } selectNewTab={ this.slectedTab }>
          <Tab slectedTab={ this.state.selected === 'Home' }>
            <p>Some test text</p>
          </Tab>
          <Tab slectedTab={ this.state.selected === 'Settings' }>
            <h1>More test text</h1>
          </Tab>
          <Tab slectedTab={ this.state.selected === 'Profile' }>
            <ul>
              <li>List test 1</li>
              <li>List test 2</li>
              <li>List test 3</li>
            </ul>
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default App;