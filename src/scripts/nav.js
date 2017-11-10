import NavItem from './navItem';
import Component from './commons/component';

/** Class representing the main Nav */
export default class Nav extends Component {
    constructor(data, wrapper) {
        super();
        this.setState({ data: data, wrapper: wrapper });
    }
    render() {
        var st =  this.state.data.map(node => {
            var navItem = new NavItem(node, this.state.wrapper);
        }).join('');
        this.state.wrapper.innerHTML += `<li class="nav-footer">
            <span>
                © 2014 Huge. All Rights Reserved.
            </span>
        </li>`;
    }
}
