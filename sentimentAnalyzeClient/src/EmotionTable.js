import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      const keys = ['sadness','joy','fear','disgust','anger']
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          <table className="table table-bordered">
            <tbody>
            {
              //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
              keys.map((val,i) => <tr key={i}>
                <td>{val}</td>
                <td>{this.props.emotions[val]}</td>
              </tr>)
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;