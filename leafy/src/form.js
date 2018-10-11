import {Component} from 'react';
import Countries  from 'react-select-country';

class Form extends Component {
    constructor(props){
        super(props);
        this.onSelectCountry=this.onSelectCountry.bind(this);
      };
      onSelectCountry(event){
        this.state.selectedCountry={
             id:event.target.value,
             name:event.target.options[event.target.selectedIndex].text
        }
        //OR,if you assign "ref" to the component , ,
        this.state.selectedCountry=this.refs.country.selected; // {value,name}
      }
      render(){
        return(
          <form action="/">
            <div class="form-group">
                <label for="country">Country:</label>
                <Countries ref="country" name="country" empty=" -- Select country --" onChange={(e)=>this.onSelectCountry(e)} />
            </div>
            <div class="form-group">
                <input type="submit" value="Submit"/>
            </div>
          </form>
     
        )
      }
    };

  