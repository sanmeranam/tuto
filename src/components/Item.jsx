import React, { Component, useState } from 'react'

export default function Item(props) {
    const { name, onChange } = props;
    const [localName, setLocalName] = useState(name)
    return (
        <div style={{ border: '1px solid gray' }}>
            <h3>{name}</h3>
            <p>
                <input type="text" value={localName} onChange={(e) => {
                    setLocalName(e.target.value)
                }} />
            </p>
            <p>
                <button onClick={() => {
                    onChange(localName)
                }}>Update</button>
            </p>
            <select >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
    )

}


// export default Item extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             localName: props.name
//         }
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.name !== this.props.name) {
//             this.setState({ localName: this.props.name })
//         }
//     }

//     componentDidMount() {
//         console.log('Item Mounted')
//     }

//     onValueChange = (e) => {
//         this.setState({ localName: e.target.value })
//     }

//     onButtonClick = () => {
//         const { localName } = this.state;
//         const { onChange } = this.props;
//         onChange(localName)
//     }

//     render() {
//         const { name } = this.props;
//         const { localName } = this.state;
//         return (
//             <div style={{ border: '1px solid gray' }}>
//                 <h3>{name}</h3>
//                 <p>
//                     <input type="text" value={localName} onChange={this.onValueChange} />
//                 </p>
//                 <p>
//                     <button onClick={this.onButtonClick}>Update</button>
//                 </p>
//             </div>
//         )
//     }
// }
