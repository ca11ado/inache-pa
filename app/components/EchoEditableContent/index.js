/**
*
* EchoEditableContent
*
*/

import React from 'react';



function EchoEditableContent(props) {
  return (
    <div>
      <div>
        {_.map(props.content, (tour, index) => (
          <div key={`ContentEditPage-content-item-${index}`}>
            <div>{tour.date}</div>
            <div>{tour.fullDescription}</div>
          </div>
        ))}
      </div>        
    </div>
  );
}

export default EchoEditableContent;
