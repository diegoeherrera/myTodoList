import React from 'react'



 const TodoRenderTask = ({data}) => {

    return (

          <div>
                {
                    data.map( task=>{

                        return(
                                    <li>
                                       <h2>{task.title}</h2>
                                       <h2>{task.description}</h2>
                                       <h2>{task.doDate}</h2>
                                       
                                    </li>  
                            )
                        }
                    )
                }

          </div>
      )
}



export default TodoRenderTask