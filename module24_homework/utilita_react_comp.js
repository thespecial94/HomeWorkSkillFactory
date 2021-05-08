const yagrs = require("yargs");
const path=require('path');
const fs=require('fs/promises');

const argv=yagrs
.command(['create-temp-comp <name_comp> <type_comp>','c'],'Create a template for the component',{},
    (argv)=>
    {
        const filepath = path.resolve('./' + argv.name_comp + '_' + argv.type_comp + '.js');
        const Template = argv.type_comp === 'class' ? 
        `${argv.type_comp} ${argv.name_comp} extends React.Component {
            render() {
              return (
                <div>
                ${argv.name_comp}
                </div>
              );
            }
          }`
        :
         `import React from 'react';
        export const ${argv.name_comp} = (props) => {
            return (
              <div>${argv.name_comp}</div>
            );
          }`;
        fs.writeFile(filepath,Template)
        .then(()=>console.log('Successfully creates component'))
        .catch(e=>console.error('Describe is an error: ', e))
    }
)
.argv;



