import React, {useState} from 'react';
function  Help() {

    const [helptext, setHelpText] = useState('');
    const onClikHelpButton = (e) =>  {
        
        console.log(e);
        setHelpText('type  a task in  text field and then press Enter. If you want to  mark the task as completed click on check box. if you want to delete click delete buttonrmdir ');
      }
    return(
        <div>
            <p>{helptext}</p>
            <button onClick={onClikHelpButton}>help</button>
        </div>
        
    )
}

export default Help;