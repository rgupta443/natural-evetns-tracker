import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import arrowUpAlt2 from '@iconify-icons/dashicons/arrow-up-alt2';
import arrowDownAlt2 from '@iconify-icons/dashicons/arrow-down-alt2';
import './DropDown.css';

class DropDown extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dropDownOpen: false,
         defaultSelectedTitle: this.props.title
      }
   };

   render() {
      const { dropDownItems, toggleSelectedItem } = this.props;
      const { dropDownOpen, defaultSelectedTitle } = this.state;
      return (
         <div>
            <div className="drop-down-wrapper">
               <button type="button" className="drop-down-header" onClick={() => this.toggleDropDown()}>
                  <div className="drop-down-header-title">{defaultSelectedTitle}</div>
                  {
                     dropDownOpen ? <Icon icon={arrowUpAlt2} /> :
                        <Icon icon={arrowDownAlt2} />
                  }
               </button>
               {dropDownOpen && <ul className="drop-down-list">
                  {dropDownItems.map(item => {
                     return <li className="drop-down-list-item" key={item.id} onClick={() => {
                        toggleSelectedItem(item);
                        this.updateState(item);
                     }
                     }>{item.title}</li>
                  })}
               </ul>}
            </div>
         </div>
      )
   }

   updateState(item) {
      this.setState({
         dropDownOpen: false,
         defaultSelectedTitle: item.title
      })
   }

   toggleDropDown() {
      this.setState(prevState => ({
         dropDownOpen: !prevState.dropDownOpen
      }))
   }
}

export default DropDown;