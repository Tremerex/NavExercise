import Component from './commons/component';

/** Class representing the Items and subItems of the main Nav */
export default class NavItem extends Component {
    constructor(node, wrapper) {
        super();
        this.setState({
            node: node,
            wrapper: wrapper
        });
    }
    handleClickHeader = (e) => {
        e.preventDefault();
    }
    render() {
        let { node } = this.state;
        let hasChildren = !!node.items.length;
        let wrapper =  `<li>
            <a href="${this.state.node.url}" ${hasChildren ? 'class="has-children"' : ''}>
                ${this.state.node.label}
            </a>
            ${hasChildren ? `<ul class="sub-nav">
                ${node.items.map(node => {
                    return `<li><a href="${node.url}">
                        ${node.label}
                    </a></li>`;
                }).join('')}
            </ul>` : ''}
        </li>`;
        this.state.wrapper.innerHTML += wrapper;
    }
}
